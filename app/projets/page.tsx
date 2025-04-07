import Projet from "@/components/Projet"

/**
 * @type {import("next").Metadata}
 * 
 */
export const metadata = {
    title: "Projets | P.Ndingue",
    description: "Page decrivant les differents projets de travail de Paul",
  };
  

   export default function ProjetPage() {
      return (
        <>
      <Projet />
        </>
      );
    }