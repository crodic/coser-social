import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Grid, Lock, Share2, Shield, Star, Trophy } from "lucide-react";
import ProfileGallery from "./_components/profile-gallery";
import ProfileStats from "./_components/profile-stats";
import { posts } from "@/mocks/posts";
import { Post } from "@/components/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Sakura",
};

export default function ProfilePage() {
  return (
    <>
      <main className="flex flex-1 overflow-hidden pb-4">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-background flex flex-1 flex-col overflow-hidden">
            {/* Cover Photo */}
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 sm:h-64 md:h-80">
              <Image src="/image.png" alt="Cover photo" fill className="object-cover" priority />
              <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>

            {/* Profile Header */}
            <div className="relative container mx-auto mt-8 px-4 pb-4">
              <div className="relative flex flex-col items-center">
                {/* Profile Picture */}
                <div className="relative">
                  <Avatar className="border-background h-32 w-32 border-4 sm:h-40 sm:w-40">
                    <AvatarImage src="/avatar.jpg" alt="SakuraCosplay" />
                    <AvatarFallback className="text-2xl">SC</AvatarFallback>
                  </Avatar>
                  <div className="bg-primary text-primary-foreground absolute -top-2 -right-2 rounded-full p-1">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>

                {/* User Info */}
                <div className="mt-4 flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold sm:text-3xl">Sakura Cosplay</h1>
                  <p className="text-muted-foreground text-sm">@sakuracosplay</p>

                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      <span>Pro Cosplayer</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span>Featured Creator</span>
                    </Badge>
                  </div>

                  {/* Level and XP */}
                  <div className="mt-4 w-full max-w-xs">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Level 42</span>
                      <span className="text-muted-foreground">8,750 / 10,000 XP</span>
                    </div>
                    <Progress value={87.5} className="mt-1 h-2" />
                  </div>

                  {/* Bio */}
                  <p className="mt-4 max-w-md text-center text-sm">
                    Professional cosplayer specializing in anime and game characters. Prop maker and costume designer.
                    🌸 Bringing your favorite characters to life since 2015!
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-4 flex gap-2">
                    <Button variant="destructive">
                      <Lock />
                      Block
                    </Button>
                    <Button>Follow</Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <ProfileStats />

              {/* Content Tabs */}
              <Tabs defaultValue="posts" className="mt-8">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="posts">Bài viết</TabsTrigger>
                  <TabsTrigger value="photos">Ảnh</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="collections">Bộ sưu tập</TabsTrigger>
                  <TabsTrigger value="about">Về tôi</TabsTrigger>
                </TabsList>

                <TabsContent value="posts" className="mt-6">
                  {/* <PostInput setCreatePostOpen={() => {}} /> */}
                  {/* Featured Post */}
                  {posts.map((post) => (
                    <Post
                      key={post.id}
                      comments={post.comments}
                      shares={post.shares}
                      content={post.content}
                      images={post.images}
                      reactions={post.reactions}
                      user={post.user}
                    />
                  ))}
                  {/* Gallery Grid
                    <ProfileGallery /> */}
                </TabsContent>

                <TabsContent value="photos" className="mt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium">Photos</h3>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Camera className="h-4 w-4" />
                      <span>View All</span>
                    </Button>
                  </div>
                  <ProfileGallery />
                </TabsContent>

                <TabsContent value="videos" className="mt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium">Videos</h3>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="overflow-hidden rounded-lg">
                        <div className="relative aspect-video w-full">
                          <Image src={`/image (${item}).png`} alt={`Video ${item}`} fill className="object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-background/80 rounded-full p-3">
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="bg-background/80 absolute right-2 bottom-2 rounded px-2 py-1 text-xs">
                            3:24
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="font-medium">Cosplay Tutorial #{item}</p>
                          <p className="text-muted-foreground text-xs">12K views • 2 weeks ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="collections" className="mt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium">Collections</h3>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Grid className="h-4 w-4" />
                      <span>View All</span>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {["Anime Characters", "Game Cosplays", "Prop Making", "Conventions"].map((collection, index) => (
                      <Link href="#" key={collection} className="group">
                        <div className="overflow-hidden rounded-lg border">
                          <div className="relative aspect-square w-full">
                            <Image
                              src={`/image (${index + 1}).png`}
                              alt={collection}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent" />
                            <div className="absolute bottom-0 w-full p-3">
                              <p className="font-medium text-white">{collection}</p>
                              <p className="text-xs text-white/80">24 items</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="about" className="mt-6">
                  <Card>
                    <div className="p-6">
                      <h3 className="mb-4 text-lg font-medium">About Sakura</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-muted-foreground text-sm font-medium">Bio</h4>
                          <p className="mt-1">
                            Professional cosplayer with 8+ years of experience. I specialize in creating detailed
                            costumes and props from popular anime series and video games. I&apos;ve been featured in
                            Cosplay Magazine and have won multiple awards at AnimeExpo and Comic-Con.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-muted-foreground text-sm font-medium">Location</h4>
                          <p className="mt-1">Tokyo, Japan</p>
                        </div>

                        <div>
                          <h4 className="text-muted-foreground text-sm font-medium">Joined</h4>
                          <p className="mt-1">March 2015</p>
                        </div>

                        <div>
                          <h4 className="text-muted-foreground text-sm font-medium">Specialties</h4>
                          <div className="mt-1 flex flex-wrap gap-1">
                            <Badge variant="secondary">Costume Design</Badge>
                            <Badge variant="secondary">Prop Making</Badge>
                            <Badge variant="secondary">SFX Makeup</Badge>
                            <Badge variant="secondary">Wig Styling</Badge>
                            <Badge variant="secondary">Photography</Badge>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-muted-foreground text-sm font-medium">Achievements</h4>
                          <ul className="mt-1 space-y-2">
                            <li className="flex items-center gap-2">
                              <Trophy className="h-4 w-4 text-yellow-500" />
                              <span>Best Costume - AnimeExpo 2022</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Trophy className="h-4 w-4 text-slate-400" />
                              <span>Runner-up - World Cosplay Summit 2021</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span>Featured Creator - Cosplay Magazine</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-muted-foreground text-sm font-medium">Social Links</h4>
                          <div className="mt-2 flex gap-2">
                            <Button variant="outline" size="sm">
                              Instagram
                            </Button>
                            <Button variant="outline" size="sm">
                              Twitter
                            </Button>
                            <Button variant="outline" size="sm">
                              YouTube
                            </Button>
                            <Button variant="outline" size="sm">
                              TikTok
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
