import React from 'react';
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Twitch,
    Twitter,
    Youtube,
} from 'lucide-react';

export interface SocialProfile {
    id: string;
    platform: 'instagram' | 'tiktok' | 'twitter' | 'youtube' | 'linkedin' | 'facebook' | 'twitch' | 'discord' | 'github' | 'threads' | 'spotify' | 'snapchat';
    url: string;
}

export const PLATFORMS = {
    instagram: {
        label: 'Instagram',
        color: 'hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:text-white',
        icon: <Instagram className="w-5 h-5" />
    },
    tiktok: {
        label: 'TikTok',
        color: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
        // Custom outline path for TikTok to match Lucide style
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
    },
    twitter: {
        label: 'X (Twitter)',
        color: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
        icon: <Twitter className="w-5 h-5" />
    },
    youtube: {
        label: 'YouTube',
        color: 'hover:bg-[#FF0000] hover:text-white',
        icon: <Youtube className="w-5 h-5" />
    },
    linkedin: {
        label: 'LinkedIn',
        color: 'hover:bg-[#0077b5] hover:text-white',
        icon: <Linkedin className="w-5 h-5" />
    },
    facebook: {
        label: 'Facebook',
        color: 'hover:bg-[#1877F2] hover:text-white',
        icon: <Facebook className="w-5 h-5" />
    },
    twitch: {
        label: 'Twitch',
        color: 'hover:bg-[#9146FF] hover:text-white',
        icon: <Twitch className="w-5 h-5" />
    },
    discord: {
        label: 'Discord',
        color: 'hover:bg-[#5865F2] hover:text-white',
        // Custom outline path for Discord
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01M15 12h.01M2 13a3 3 0 0 0 3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3a3 3 0 0 0 3 3v2a3 3 0 0 1-3 3h-2l-3 3-3-3H5a3 3 0 0 1-3-3v-2Z" /></svg>
    },
    github: {
        label: 'GitHub',
        color: 'hover:bg-[#181717] hover:text-white dark:hover:bg-white dark:hover:text-black',
        icon: <Github className="w-5 h-5" />
    },
    threads: {
        label: 'Threads',
        color: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
        // Custom outline path for Threads
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
    },
    spotify: {
        label: 'Spotify',
        color: 'hover:bg-[#1DB954] hover:text-white',
        // Custom outline path for Spotify
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12c2-1 6-1 8 0" /><path d="M7.5 16c2.5-1 6.5-1 9 0" /><path d="M9 8c1.5-.5 4.5-.5 6 0" /></svg>
    },
    snapchat: {
        label: 'Snapchat',
        color: 'hover:bg-[#FFFC00] hover:text-black',
        // Custom outline path for Snapchat
        icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-4.9 6v2a6 6 0 0 0-6 6c0 1 .5 2 2 2h17.8c1.5 0 2.1-1 2.1-2a6 6 0 0 0-6-6V8c0-3.3-2.1-6-5-6Z" /></svg>
    }
} as const;

export type PlatformKey = keyof typeof PLATFORMS;
