import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <div className="lg:col-span-5 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">
                    celebration
                </span>
                Step 1 of 4
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                    Your Digital Identity, <br className="hidden lg:block" />
                    <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                        Simplified.
                    </span>
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Welcome to the future of link-in-bio pages. Create your ultimate
                    online presence in minutes with our modular, bento-style builder.
                </p>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 pt-2">
                <Button size="default" className="min-w-[160px]">Get Started</Button>
                <Button variant="secondary" size="default" className="min-w-[160px]">
                    Skip Tour
                </Button>
            </div>
            {/* Social Proof / Reviews snippet */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-border-dark w-full justify-center lg:justify-start">
                <div className="flex -space-x-3">
                    {[
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuApmj1DGT2u11t_SCFYK9igtKrhPaA8qLxcYzVNazxo2aiEFjG7WU6yYEziGR6GCPrAJrTF2VBxCF8O6696-frq_6dlMB9OiJ8UXX1qIiJUOQ6U_MiawiXc5E4PtqjxoO3JmDcogP2bPGw2ZBzaqoJLGnyDL5kXw6nTA-QUpKpGL_kNGd9rnXK4dZeZhtEFna5yJT8p9Qp6l4IqAjdQkfXCvXAaXWPdmx2jbAwurXuPA2NKNLym88A9m2AoAOGrHqVtTinN-YS35w",
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAK4U8NFxrK-IJarQTT7TnKiFZgakzPofQOo11zFgo8iB8sgQ7QJeq_NqZlm21BPIuz3BaKs0X_EjR8LOwKWFspQlZfnSjykZ10qTSOHKYsVQ5nGnQWLUyTh0dbnPyGM_VfBDrlJ5mFSXRRzLRXqclXBd8ZIvF7LehrnGz8_SdPU8ZtSAqLq1U-3ruiJwyd3iFtTC7ukaWt3WwASfkE1KaB5wvKUjGCIIrcPWS2SFvU2wJtmHkL7BG5KRJUj7bhn_Y0pcBOhekW3A",
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuACh_miIFojeOsgs3zQpQL8_rzOH1-tqZpAsYgBJmCqlTyyzgo02r8bt7iR0Z5gVJ-koOBaGXhs6_Vh5G9uRaofhi1GtgPTGd8zK964DuHjtFxquNDsYW_SBWiq8bdqpGw0gLCvN-YQUsH7DoKYqZgETKZxGBg3okHSoKEUluBHp-6_iONcLRYh4Rk-F2ckPtz5ZFTGG9u8IZZp-yNsx9hpec8okPWu0zmOjmDjdO3urBUT9fsWE2pXbKrKlSflwZsJjPHKQaIXCg",
                    ].map((url, i) => (
                        <div
                            key={i}
                            className="size-10 rounded-full border-2 border-white dark:border-background-dark bg-cover bg-center"
                            style={{ backgroundImage: `url("${url}")` }}
                        />
                    ))}

                    <div className="size-10 rounded-full border-2 border-white dark:border-background-dark bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-400">
                        +10k
                    </div>
                </div>
                <div className="flex flex-col gap-0.5">
                    <div className="flex text-yellow-500 text-sm">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className="material-symbols-outlined text-[18px] fill-current"
                            >
                                star
                            </span>
                        ))}
                    </div>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        Loved by creators worldwide
                    </p>
                </div>
            </div>
        </div>
    );
}
