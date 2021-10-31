const HomeIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
				fill="currentColor" />
		</svg>
	)
}

const SearchIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd" />
		</svg>
	)
}

const CollectionIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor" />
		</svg>
	)
}

const PlusIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor" />
			<path fill="none" d="M0 0h16v16H0z" />
		</svg>
	)
}

const HeartIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="none" d="M0 0h16v16H0z" />
			<path fill="currentColor" d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" />
		</svg>
	)
}

const DownloadIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z" />
		</svg>
	)
}

const DownDirIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M3 6l5 5.794L13 6z" />
		</svg>
	)
}

const ExternalIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z" />
		</svg>
	)
}

const PrevIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none" />
		</svg>
	)
}

const NextIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none" />
		</svg>
	)
}

const PlayIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" />
		</svg>
	)
}

const Icon = ({ name, size = 24 }) => {

	const icons = {
		home: HomeIcon,
		search: SearchIcon,
		collection: CollectionIcon,
		plus: PlusIcon,
		heart: HeartIcon,
		download: DownloadIcon,
		prev: PrevIcon,
		next: NextIcon,
		downDir: DownDirIcon,
		external: ExternalIcon,
		play: PlayIcon
	}

	const Component = icons[name]
	return <Component size={size} />

}

export {
	Icon
}