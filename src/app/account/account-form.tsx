'use client';
import { useCallback, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { type User } from '@supabase/supabase-js';

// ...

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        console.log('err', error);
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
      }
    } catch (error) {
      console.log('Error loading user data!', error);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      console.log('Error updating user data!', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ge-container flex h-full flex-col items-center justify-center">
      <h1 className="mb-6">Account Settings</h1>
      <div className="flex w-full max-w-md flex-col">
        <div className="mb-6">
          <label htmlFor="email">Email</label>
          <input className="input" id="email" type="text" value={user?.email} disabled />
        </div>
        <div className="mb-6">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="input"
            id="fullName"
            type="text"
            value={fullname || ''}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="username">Username</label>
          <input
            className="input"
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="website">Website</label>
          <input
            className="input"
            id="website"
            type="url"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <button
            className="btn-secondary mb-3"
            onClick={() => updateProfile({ fullname, username, website })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>

        <div>
          <form action="/auth/signout" method="post">
            <button className="btn-primary" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
