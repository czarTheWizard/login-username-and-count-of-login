import { useState } from "react";

function ThemeColor() {
  const [settings, setSettings] = useState(() => {
    const savedUser = localStorage.getItem("settings");

    if (savedUser) {
      return JSON.parse(savedUser);
    }
    return { username: "", theme: "Light", notifications: false };
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const SavedSetting = () => {
    localStorage.setItem("settings", JSON.stringify(settings));
  };

  const Clear = () => {
    localStorage.removeItem("settings");

    setSettings({
      username: "",
      theme: "Light",
      notifications: false,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Enter name"
        onChange={handleChange}
        value={settings.username}
      />

      <select onChange={handleChange} value={settings.theme} name="theme">
        <option>Light</option>
        <option>Dark</option>
      </select>

      <input
        type="checkbox"
        name="notifications"
        onChange={handleChange}
        checked={settings.notifications}
      />
      <button onClick={SavedSetting}>Save</button>
      <button onClick={Clear}> Delete</button>

      <h2>Current Settings</h2>

      <p>Username: {settings.username}</p>

      <p>Theme: {settings.theme}</p>

      <p>
        Notifications:
        {settings.notifications ? " Enabled" : " Disabled"}
      </p>
    </div>
  );
}
export default ThemeColor;
