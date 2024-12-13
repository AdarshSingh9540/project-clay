import { notFound } from "next/navigation";
import { profiles } from "@/components/meet-mentors/data";
import MentorProfile from "@/components/MentorProfile";

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params to ensure proper access
  const { slug } = await params;

  // Find the corresponding profile
  const profile = profiles.find((p) =>
    p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  // Handle the case where the profile is not found
  if (!profile) {
    notFound();
  }

  // Render the MentorProfile component
  return <MentorProfile profile={profile} />;
}
