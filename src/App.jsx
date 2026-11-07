import React, {useEffect, useMemo, useState} from 'react'
import {Routes, Route, NavLink, useLocation} from 'react-router-dom'
import {Home, Users, MessageCircle, CalendarDays, GraduationCap, UserRound, Search, Bell, Plus, Menu, X, ChevronRight, ArrowUpRight, Heart, MessageSquare, Bookmark, MoreHorizontal, MapPin, Clock3, Sparkles, TrendingUp, Compass, LogOut, Settings, Send, SlidersHorizontal, Check, Hash, BookOpen, UsersRound, Sun, Moon} from 'lucide-react'
import {initialCommunities, initialPosts, initialEvents, currentStudent} from './data'
import {Header, Sidebar, NotificationPanel} from './components/UI'
import {HomePage, CommunitiesPage, FeedPage, EventsPage, StudyPartnersPage, ProfilePage} from './pages/Pages'
import AppLayout from './layouts/AppLayout'

const read = (key, fallback) => { try { const v=localStorage.getItem(key); return v ? JSON.parse(v) : fallback } catch { return fallback } }
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const navItems = [
  {to:'/',label:'Home',icon:Home},
  {to:'/communities',label:'Communities',icon:Users},
  {to:'/feed',label:'Campus feed',icon:MessageCircle},
  {to:'/events',label:'Events',icon:CalendarDays},
  {to:'/study-partners',label:'Study partners',icon:GraduationCap},
  {to:'/profile',label:'My profile',icon:UserRound}
]
export default function App() {
 const [communities,setCommunities]=useState(()=>read('uc_communities',initialCommunities))
 const [posts,setPosts]=useState(()=>read('uc_posts',initialPosts))
 const [events,setEvents]=useState(()=>read('uc_events',initialEvents))
 const [profile,setProfile]=useState(()=>read('uc_profile',currentStudent))
 const [query,setQuery]=useState(''),[mobileOpen,setMobileOpen]=useState(false),[notify,setNotify]=useState(false)
 const [theme,setTheme]=useState(()=>read('uc_theme','light'))
 const location=useLocation()
 useEffect(()=>{save('uc_theme',theme)},[theme]);useEffect(()=>{save('uc_communities',communities)},[communities]);useEffect(()=>{save('uc_posts',posts)},[posts]);useEffect(()=>{save('uc_events',events)},[events]);useEffect(()=>{save('uc_profile',profile)},[profile])
 useEffect(()=>{setMobileOpen(false)},[location.pathname])
 const toggleCommunity=id=>setCommunities(prev=>prev.map(c=>c.id===id?{...c,joined:!c.joined,members:c.members+(c.joined?-1:1)}:c))
 const likePost=id=>setPosts(prev=>prev.map(p=>p.id===id?{...p,liked:!p.liked,likes:p.likes+(p.liked?-1:1)}:p))
 const commentPost=(id,text)=>setPosts(prev=>prev.map(p=>p.id===id?{...p,comments:[...p.comments,{id:Date.now(),author:profile.name,text}]}:p))
 const createPost=text=>setPosts(prev=>[{id:Date.now(),author:profile.name,handle:'@kemi.esther',avatar:'KE',community:'Campus-wide',time:'Just now',type:'discussion',text,likes:0,comments:[],liked:false},...prev])
 const rsvp=(id,going)=>setEvents(prev=>prev.map(e=>e.id===id?{...e,going}:e))
 const filteredCommunities=useMemo(()=>communities.filter(c=>`${c.name} ${c.category}`.toLowerCase().includes(query.toLowerCase())),[communities,query])
 const filteredPosts=useMemo(()=>posts.filter(p=>`${p.text} ${p.author} ${p.community}`.toLowerCase().includes(query.toLowerCase())),[posts,query])
 return <div data-theme={theme}><AppLayout theme={theme} sidebar={<Sidebar mobileOpen={mobileOpen} onClose={()=>setMobileOpen(false)}/>} header={<Header onMenu={()=>setMobileOpen(true)} onNotify={()=>setNotify(true)} query={query} setQuery={setQuery} theme={theme} onToggleTheme={()=>setTheme(current=>current==='dark'?'light':'dark')}/>} footer={<footer className="footer"><span>© 2026 UniConnect</span><span>Made for campus communities <span className="footer-heart">♥</span></span></footer>} notifications={<NotificationPanel open={notify} onClose={()=>setNotify(false)}/>}> <Routes>
  <Route path="/" element={<HomePage communities={filteredCommunities} posts={filteredPosts} events={events} onToggle={toggleCommunity} onLike={likePost} onComment={commentPost} onCreate={createPost}/>}/>
  <Route path="/communities" element={<CommunitiesPage communities={communities} onToggle={toggleCommunity}/>}/>
  <Route path="/feed" element={<FeedPage posts={filteredPosts} onLike={likePost} onComment={commentPost} onCreate={createPost}/>}/>
  <Route path="/events" element={<EventsPage events={events} onRsvp={rsvp}/>}/>
  <Route path="/study-partners" element={<StudyPartnersPage/>}/>
  <Route path="/profile" element={<ProfilePage profile={profile} setProfile={setProfile} communities={communities} posts={posts}/>}/>
  <Route path="*" element={<div className="page"><h1>Page not found</h1><NavLink to="/">Return home</NavLink></div>}/>
 </Routes></AppLayout></div>
}
