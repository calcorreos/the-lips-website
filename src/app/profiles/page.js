export const metadata = {
  title: 'Profiles | Team Lips',
};

// Initial 5 mock profiles
const initialProfiles = [
  { id: 1, name: 'Alvin', role: 'Team Lips', bio: 'Here for the vibes.' },
  { id: 2, name: 'Cale', role: 'Team Lips', bio: 'Here for the vibes.' },
  { id: 3, name: 'Cam', role: 'Team Lips', bio: 'Here for the vibes.' },
  { id: 4, name: 'John', role: 'Team Lips', bio: 'Here for the vibes.' },
  { id: 5, name: 'Lex', role: 'Team Lips', bio: 'Here for the vibes.' },
];

export default function Profiles() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--lips-pink)', marginBottom: '1rem' }}>
        Meet Team Lips 👄
      </h1>
      <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '3rem' }}>
        The founding 5.
      </p>
      
      <div className="profiles-grid">
        {initialProfiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <div className="avatar-placeholder">👄</div>
            <h3>{profile.name}</h3>
            <div style={{ color: 'var(--lips-pink-light)', fontWeight: 'bold', marginBottom: '1rem' }}>
              {profile.role}
            </div>
            <p>{profile.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
