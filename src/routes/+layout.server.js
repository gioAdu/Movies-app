export async function load({ cookies }) {
	const isDark = cookies.get('isDark') ?? 'false';
	
	return { isDark };
}
  