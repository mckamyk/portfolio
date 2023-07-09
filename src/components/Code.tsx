import SyntaxHighligher from 'react-syntax-highlighter'
import {tomorrowNightBlue} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
	code: string;
	filename?: string;
}

export default function Code({code, filename}: Props) {
	return (
		<div className='w-full shadow-sky-950 shadow-lg '>
			{filename && <div className="bg-blue-950 px-2 py-1 rounded-t text-slate-400">{filename}</div>}
			<SyntaxHighligher language="typescript" style={tomorrowNightBlue} className={`${filename ? "rounded-b" : "rounded"} w-full`}>
				{code.trim()}
			</SyntaxHighligher>
		</div>
	)
}