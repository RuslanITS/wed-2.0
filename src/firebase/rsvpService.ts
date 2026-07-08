import type { RSVPFormValues } from '@/types/wedding';

export class FirebaseConfigurationError extends Error {
  public constructor() {
    super('Firebase Realtime Database URL is not configured.');
    this.name = 'FirebaseConfigurationError';
  }
}

const fallbackRealtimeDatabaseUrl = 'https://hw56js-default-rtdb.europe-west1.firebasedatabase.app';

const getRealtimeDatabaseUrl = (): string => {
  const databaseUrl = import.meta.env.VITE_FIREBASE_DATABASE_URL ?? fallbackRealtimeDatabaseUrl;
  const normalizedUrl = databaseUrl.trim().replace(/\/$/, '');

  if (!normalizedUrl) {
    throw new FirebaseConfigurationError();
  }

  return normalizedUrl;
};

export const submitRSVP = async (values: RSVPFormValues): Promise<void> => {
  const databaseUrl = getRealtimeDatabaseUrl();

  const response = await fetch(`${databaseUrl}/wedding-rsvp.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...values,
      createdAt: new Date().toISOString(),
      event: 'ruslan-alpeim-2026-08-09',
    }),
  });

  if (!response.ok) {
    throw new Error(`Realtime Database request failed with status ${response.status}.`);
  }
};
