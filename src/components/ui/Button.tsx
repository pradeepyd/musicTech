import Link from "next/link";

function Button({content,href}:{content:string,href:string}){
    return (
        <Link 
            href={`/${href}`}
            className="relative bg-gray-300 text-black px-6 py-3 rounded-md 
                overflow-hidden transition-all duration-300 
                hover:scale-105 hover:shadow-[0_0_6px_rgba(59,130,246,0.3)]
                active:scale-95 focus:outline-none focus:ring-1 focus:ring-blue-500
                before:absolute before:inset-0 before:z-[-1] before:bg-teal-300 
                before:blur-sm before:opacity-30
                hover:before:opacity-50 animate-subtle-glow"
        >
        {content}
    </Link>

    )
}

export default Button
