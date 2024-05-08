import { getPage } from '$lib/api';
import {ROUTES} from "$lib/constants.js";

export async function load({ locals }) {
  const currentUser = locals.user;
  const page = await getPage(ROUTES.cv);
  return {
    currentUser,
    page
  };
}
