"use client"
import { useMediaQuery } from './hooks/use-media-query';
import React from 'react'
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { MenuIcon } from 'lucide-react';
import Navbar from '@/app/components/navbar';
import "./mainmenu.css"

const MainMenu = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
  <div><Navbar/></div>
  ) : (
  <div>
    <header>Muhammad Rayyan Naveed</header>
    <Drawer direction='right'>
        <DrawerTrigger>
            <MenuIcon id='menuicon'/>
        </DrawerTrigger>
        <DrawerContent>
        <nav id="nav">
                <ul id="right-cont">
                    <li><Link href="/">Home</Link></li>         
                    <li><Link href="/about">About</Link></li>         
                    <li><Link href="/projects">Projects</Link></li>        
                    <li><Link href="/contacts">Contacts</Link></li>         
                </ul>
            </nav>
        </DrawerContent>
    </Drawer>
  </div>
  ); 
}

export default MainMenu