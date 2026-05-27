export const metadata = {
  title: 'Profiles | The Lips',
};

// Initial 5 mock profiles
const initialProfiles = [
  { id: 1, name: 'Alex', role: 'The Organizer', bio: 'Always knows where the party is at.' },
  { id: 2, name: 'Jordan', role: 'Vibe Checker', bio: 'Ensuring the vibes are immaculate 24/7.' },
  { id: 3, name: 'Casey', role: 'The Artist', bio: 'Our resident creative genius. Designed the original lips.' },
  { id: 4, name: 'Riley', role: 'Snack Manager', bio: 'Never shows up without a bag of chips.' },
  { id: 5, name: 'Taylor', role: 'Hype Person', bio: 'Will scream for you when you do the bare minimum.' },
];

export default function Profiles() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: 'var(--lips-pink)', marginBottom: '1rem' }}>
        Meet The Lips 👄
      </h1>
      <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '3rem' }}>
        The founding 5. More profiles coming soon!
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
