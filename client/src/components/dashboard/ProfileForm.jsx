import React, { useState } from 'react';

const ProfileForm = ({ userProfile, onSave }) => {
  const [formData, setFormData] = useState(userProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Bio:
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

const UserProfile = () => {
  const initialProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Hello, I am John Doe.'
  };
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleSave = (formData) => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h1>User Profile</h1>
      {isEditing ? (
        <ProfileForm userProfile={profile} onSave={handleSave} />
      ) : (
        <div>
          <p><strong>Name:</strong> {profile.t}</p>
          <p><strong>Email:</strong> {profile.email} g</p>
          <p><strong>Bio:</strong> {profile.role}</p>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
