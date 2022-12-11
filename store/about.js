import { diffDate } from "~/utils/helpers"
const daysLived = diffDate(2001, 11, 10)
const daysLivedString = computed(
  () =>
    `${daysLived.year} years, ${daysLived.month} months, ${daysLived.date} days!`
)

export const aboutme = [
  {
    name: "Name",
    value: "Amit Kumar Sharma",
  },
  {
    name: "Days Lived",
    value: daysLivedString.value,
  },
  {
    name: "Location",
    value: "Ranchi, Jharkhand, India",
  },
  {
    name: "Summary",
    value: `A ${daysLived.year} year young, self-motivated tech enthusiast, full-stack developer and a ML enthusiast. 
                            I spend my time learning & experimenting new technologies.`,
  },
  {
    name: "",
    value: `Over the last two years, I've gained expertise in modern tech stacks like React, Next, Vue, NodeJS and PostgreSQL.
                      I've worked on plenty of projects including REST APIs, Websites and CLIs.
                      I'm currently focusing on participating in developer friendly events and contributing to opensource projects & softwares.`,
  },
]
