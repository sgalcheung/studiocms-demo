import blog from '@studiocms/blog';
import { defineStudioCMSConfig } from 'studiocms/config';

export default defineStudioCMSConfig({
	dbStartPage: true,
	plugins: [blog()],
});
