import Apropos from '@/components/Apropos'
import TechicalSkill from "@/components/technicalSkill"
import Softskill from "@/components/Softskill"

/**
 * @type {import("next").Metadata}
 * 
 */
export const metadata = {
  title: "Apropos | P.Ndingue",
  description: "Page decrivant bien le portfolio de Paul",
};


export default function AproposPage() {
  return (
    <>
      <Apropos />
      <TechicalSkill />
    </>
  );
}
