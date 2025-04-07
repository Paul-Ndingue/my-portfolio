import Contact from "@/components/MonContact"


/**
 * @type {import("next").Metadata}
 * 
 */
export const metadata = {
    title: "Cantacter | P.Ndingue",
    description: "Page Contact du portfolio de Paul",
  };
  

  export default function ContactPage() {
    return (
      <>
    <Contact />
      </>
    );
  }
  
  