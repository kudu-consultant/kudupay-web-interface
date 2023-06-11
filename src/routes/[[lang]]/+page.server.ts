import { DEFAULT_LANGUAGE } from 'CONSTANTS'

export const load = async ({ params }) => {
	const locales = (await import(`../../locales/${params.lang ?? DEFAULT_LANGUAGE}.json`)).default
		.pages.home
	return {
		locales
	}
}
