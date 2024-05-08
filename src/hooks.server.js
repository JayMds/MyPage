import {getCurrentUser} from '$lib/api';

export async function handle({ event, resolve }) {
  event.locals.user = await getCurrentUser(event.cookies.get('sessionid'));
  return await resolve(event);
}
