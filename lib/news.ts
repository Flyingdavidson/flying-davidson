export type NewsArticle = {
  category: string;
  date: string;
  title: string;
  text: string;
  href: string;
};

// Official stories from https://airracex.com/news/ and selected media coverage,
// checked 14 September 2026. Keep the archive newest first.
export const newsArticles: NewsArticle[] = [
  {
    category: "AIR RACE X",
    date: "14 September 2026",
    title: "Patrick Davidson Wins Race 4 and Retains the AIR RACE X Title",
    text: "Davidson wins the season finale and finishes level with Yoshihide Muroya on 99 points. His two race victories to Muroya's one secure a second consecutive AIR RACE X championship.",
    href: "https://airracex.com/news/news-11/",
  },
  {
    category: "Red Bull South Africa",
    date: "14 September 2026",
    title: "The Man Who Writes in a Language Only He Can Read",
    text: "Red Bull profiles Patrick Davidson's handwritten aerobatic shorthand, the preparation and muscle memory behind every flight, and the instinct that helped him land safely after an engine failure.",
    href: "https://www.redbull.com/za-en/pat-davidson-what-we-know-profile",
  },
  {
    category: "AIR RACE X",
    date: "9 September 2026",
    title: "Race 4 Preview: The Championship Decider",
    text: "The final round combines a tight opening chicane with high and low turns. AIR RACE X explains the lines, speed management and precision that will shape the season finale.",
    href: "https://airracex.com/news/news-10/",
  },
  {
    category: "AIR RACE X",
    date: "12 August 2026",
    title: "Race 3 Preview: Speed Meets Precision",
    text: "An 800-metre opening straight leads into a course that balances vertical and horizontal turns. The official guide explores where pilots can gain time and where the limits leave no room for error.",
    href: "https://airracex.com/news/news-08/",
  },
  {
    category: "AIR RACE X",
    date: "20 July 2026",
    title: "Race 2 Results: Muroya Wins, Davidson Takes Second",
    text: "Patrick Davidson beats opening-round winner Aarron Deliu in the semifinal before facing Yoshihide Muroya in the final. Muroya takes the win and the championship lead, with Team 77 on the podium.",
    href: "https://airracex.com/news/news-07/",
  },
  {
    category: "AIR RACE X",
    date: "15 July 2026",
    title: "Race 2 Track Guide: A New Challenge in the Turns",
    text: "The same five markers produce a very different race. Four low turns and one high turn put sustained G loads, energy management and each team's choice of racing line under the spotlight.",
    href: "https://airracex.com/news/news-06/",
  },
  {
    category: "AIR RACE X",
    date: "12 July 2026",
    title: "AIR RACE X Previews Race 2 Championship Battle",
    text: "Patrick Davidson and Team 77 head into Race 2 sitting fourth in the championship as AIR RACE X releases its official preview ahead of the next round.",
    href: "/media/news/air-race-x-race-2-preview",
  },
  {
    category: "AIR RACE X",
    date: "29 June 2026",
    title: "Deliu Claims His First Win in the 2026 Opener",
    text: "Aarron Deliu opens the season with victory ahead of Martin Šonka and Yoshihide Muroya. Patrick Davidson finishes fourth as the four-round championship gets under way.",
    href: "https://airracex.com/news/news-05/",
  },
  {
    category: "AIR RACE X",
    date: "17 June 2026",
    title: "Race 1 Track Guide: Inside the Season Opener",
    text: "Fifteen gates and five reversal turns set the first test of 2026. AIR RACE X breaks down the course, its demanding vertical turns and the penalties that can change a result.",
    href: "https://airracex.com/news/news-04/",
  },
  {
    category: "AIR RACE X",
    date: "17 June 2026",
    title: "AIR RACE X Announces 2026 Championship Schedule",
    text: "AIR RACE X officially unveils the 2026 season, confirming four championship races and a new broadcast schedule.",
    href: "/media/news/air-race-x-2026-schedule",
  },
  {
    category: "Sponsor",
    date: "April 2026",
    title: "Emotive Backs World Champion Patrick Davidson",
    text: "Emotive becomes Team 77's principal partner as Patrick Davidson begins his defence of the 2026 AIR RACE X Championship.",
    href: "/media/news/emotive-backs-patrick-davidson",
  },
  {
    category: "AIR RACE X",
    date: "18 March 2026",
    title: "Melissa Burns Joins the 2026 Grid",
    text: "American pilot Melissa Burns joins Canada's Michael Tryggvason among the new challengers. A training camp at Fukushima Sky Park prepares the rookies for the demands of AIR RACE X.",
    href: "https://airracex.com/news/news-01/",
  },
  {
    category: "AIR RACE X",
    date: "18 February 2026",
    title: "AIR RACE X Reveals Its Plans for the 2026 Field",
    text: "The series announces its initial pilot lineup and a four-round championship, bringing experienced race winners and emerging competitors together for another season of racing from locations around the world.",
    href: "https://airracex.com/news/news-02/",
  },
  {
    category: "AIR RACE X",
    date: "6 September 2025",
    title: "2025 Finale: Official Results and Season Standings",
    text: "Explore the qualifying classification, final race results and championship standings from the Osaka Umekita round, with links to the official qualifying and finals broadcasts.",
    href: "https://airracex.com/news/news-03/",
  },
];
