import type { Metadata } from "next";
import ExploreClient from "./ExploreClient";

export const metadata: Metadata = {
  title: "Explore Hyderabad Places & Food Stalls",
  description: "Browse Hyderabad places and food stalls by type and area, with community-sourced recommendations and practical details."
};

export default function ExplorePage() { return <ExploreClient />; }