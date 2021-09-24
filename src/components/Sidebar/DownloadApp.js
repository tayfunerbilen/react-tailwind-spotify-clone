import { Icon } from "Icons"

function DownloadApp() {
	return (
		<a href="#" className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 items-center px-6">
			<Icon name="download" size={20} />
			Uygulamayı Yükle
		</a>
	)
}

export default DownloadApp