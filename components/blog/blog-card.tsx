"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  readTime: string
  featured?: boolean
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'aspect-video'}`}>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {post.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-blue-600 text-white">Destacado</Badge>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <CardContent className={`p-6 ${featured ? 'md:w-1/2 flex flex-col justify-between' : ''}`}>
          <div>
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className={`text-slate-600 mb-4 ${featured ? 'text-lg' : ''}`}>
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Read more */}
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/link"
          >
            <span>Leer más</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </CardContent>
      </div>
    </Card>
  )
}
