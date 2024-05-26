import { cn } from "@/lib/utils"
import Image from "next/image"
import { HtmlHTMLAttributes } from "react"

interface phoneProps extends HtmlHTMLAttributes<HTMLDivElement> {
    imgScr: string
    dark?: boolean
}

function Phone({ imgScr, className, dark = false, ...props }: phoneProps) {
    return (
        <div
            className={cn(" relative pointer-events-none z-50 overflow-hidden", className)}
            {...props}>
            <Image
                width={200}
                height={200}
                src={
                    dark
                        ? '/phone-template-dark-edges.png'
                        : '/phone-template-white-edges.png'
                }
                alt='phone'
                className="pointer-events-none z-50 select-none"
            />

            <div className=" absolute -z-10 inset-0">
                <Image width={200} height={200} src={imgScr} alt='phone-overlay' className="object-cover" />
            </div>
        </div>
    )
}

export default Phone