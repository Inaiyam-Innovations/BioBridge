export type Category = {
  id: string;
  code: string;
  name: string;
  blurb: string;
};

export type ProblemStatement = {
  code: string;
  categoryId: string;
  title: string;
  description: string;
  wildcard?: boolean;
};

export const categories: Category[] = [
  {
    id: "precision-biotherapeutics",
    code: "PB",
    name: "Precision Biotherapeutics & Drug Discovery",
    blurb: "Targeted molecules, delivery systems and discovery pipelines.",
  },
  {
    id: "diagnostics-devices",
    code: "DM",
    name: "Diagnostics & Medical Devices",
    blurb: "Point-of-care detection, imaging and affordable device design.",
  },
  {
    id: "bioinformatics-bio-ai",
    code: "BG",
    name: "Bioinformatics, Genomics & Bio-AI",
    blurb: "Sequence analysis, predictive models and data infrastructure.",
  },
  {
    id: "agri-biotech",
    code: "AG",
    name: "Climate-Resilient Agriculture & Agri-Biotech",
    blurb: "Resilient crops, soil biology and farm-level bio-inputs.",
  },
  {
    id: "functional-foods",
    code: "FN",
    name: "Functional Foods, Nutrition & Smart Proteins",
    blurb: "Alternative proteins, fortification and nutrition science.",
  },
  {
    id: "environmental-industrial",
    code: "EV",
    name: "Environmental, Industrial & Waste-to-Value Biotech",
    blurb: "Bioremediation, circular processes and industrial enzymes.",
  },
  {
    id: "open-bio-track",
    code: "OB",
    name: "Open Bio Track",
    blurb: "Cross-cutting ideas, frugal innovation and your own wildcard.",
  },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id);

export const problems: ProblemStatement[] = [
  // Precision Biotherapeutics & Drug Discovery
  {
    code: "BB-PB-01",
    categoryId: "precision-biotherapeutics",
    title: "Low-cost screening pipeline for repurposed small molecules",
    description:
      "Design a screening and prioritisation workflow that lets a small lab shortlist existing approved molecules for a new indication using open datasets and inexpensive assays.",
  },
  {
    code: "BB-PB-02",
    categoryId: "precision-biotherapeutics",
    title: "Targeted delivery for oncology payloads",
    description:
      "Propose a carrier or conjugation strategy that improves tumour-site delivery while lowering systemic exposure, with a feasible path to bench validation.",
  },
  {
    code: "BB-PB-03",
    categoryId: "precision-biotherapeutics",
    title: "Affordable biologics manufacturing at small scale",
    description:
      "Rework an expression, purification or formulation step so a therapeutic protein can be produced reliably at pilot scale in an Indian academic or startup facility.",
  },
  {
    code: "BB-PB-04",
    categoryId: "precision-biotherapeutics",
    title: "Antimicrobial resistance countermeasures",
    description:
      "Develop a therapeutic or adjuvant approach against a priority resistant pathogen, including a clear resistance-development and stewardship argument.",
  },
  {
    code: "BB-PB-05",
    categoryId: "precision-biotherapeutics",
    title: "Precision dosing for underserved patient groups",
    description:
      "Build a method to personalise dosage for paediatric, geriatric or comorbid patients using accessible biomarkers and simple decision support.",
  },

  // Diagnostics & Medical Devices
  {
    code: "BB-DM-01",
    categoryId: "diagnostics-devices",
    title: "Rapid point-of-care test for a high-burden infection",
    description:
      "Create a sample-to-result test usable at a primary health centre with no cold chain, reporting a result in under 30 minutes.",
  },
  {
    code: "BB-DM-02",
    categoryId: "diagnostics-devices",
    title: "Non-invasive screening for metabolic disease",
    description:
      "Design a low-cost, non-invasive screening approach for diabetes or related metabolic conditions suitable for community camps.",
  },
  {
    code: "BB-DM-03",
    categoryId: "diagnostics-devices",
    title: "Frugal biomedical device for rural clinics",
    description:
      "Engineer a durable, field-repairable device that replaces an expensive imported instrument in a rural clinical workflow.",
  },
  {
    code: "BB-DM-04",
    categoryId: "diagnostics-devices",
    title: "Wearable monitoring with clinically useful alerts",
    description:
      "Turn continuous sensor data into a small number of trustworthy clinical alerts, addressing false positives and patient adherence.",
  },
  {
    code: "BB-DM-05",
    categoryId: "diagnostics-devices",
    title: "Maternal and newborn health diagnostics",
    description:
      "Propose a diagnostic or triage tool that catches a common maternal or neonatal risk earlier in low-resource settings.",
  },

  // Bioinformatics, Genomics & Bio-AI
  {
    code: "BB-BG-01",
    categoryId: "bioinformatics-bio-ai",
    title: "Variant interpretation for Indian population genomes",
    description:
      "Build an interpretation or annotation workflow that accounts for under-represented Indian population variation in clinical reporting.",
  },
  {
    code: "BB-BG-02",
    categoryId: "bioinformatics-bio-ai",
    title: "Protein structure and function prediction for orphan targets",
    description:
      "Use structure prediction and docking to characterise a poorly annotated target and propose testable hypotheses.",
  },
  {
    code: "BB-BG-03",
    categoryId: "bioinformatics-bio-ai",
    title: "Open pathogen genomic surveillance dashboard",
    description:
      "Design a pipeline and dashboard that turns sequencing submissions into timely, shareable outbreak intelligence.",
  },
  {
    code: "BB-BG-04",
    categoryId: "bioinformatics-bio-ai",
    title: "Multi-omics integration for disease subtyping",
    description:
      "Combine two or more omics layers to separate clinically meaningful disease subtypes, with honest validation on held-out data.",
  },
  {
    code: "BB-BG-05",
    categoryId: "bioinformatics-bio-ai",
    title: "Bio-AI assistant for wet-lab protocols",
    description:
      "Build a model-assisted tool that helps researchers plan, troubleshoot and record experiments without hallucinating protocol steps.",
  },

  // Climate-Resilient Agriculture & Agri-Biotech
  {
    code: "BB-AG-01",
    categoryId: "agri-biotech",
    title: "Drought and salinity tolerance in staple crops",
    description:
      "Identify traits, markers or bio-inputs that keep yields stable under water stress or rising soil salinity.",
  },
  {
    code: "BB-AG-02",
    categoryId: "agri-biotech",
    title: "Early crop disease detection in the field",
    description:
      "Combine biology and imaging or sensing so a farmer can detect an outbreak days earlier than visual inspection allows.",
  },
  {
    code: "BB-AG-03",
    categoryId: "agri-biotech",
    title: "Biofertilisers and microbial consortia for degraded soils",
    description:
      "Formulate a microbial product with a realistic shelf life and application method for smallholder plots.",
  },
  {
    code: "BB-AG-04",
    categoryId: "agri-biotech",
    title: "Post-harvest loss reduction with bio-based solutions",
    description:
      "Reduce spoilage in a specific crop supply chain using coatings, controlled ripening or biological preservatives.",
  },
  {
    code: "BB-AG-05",
    categoryId: "agri-biotech",
    title: "Livestock and aquaculture health management",
    description:
      "Improve disease prevention, feed efficiency or antibiotic reduction in an Indian livestock or aquaculture system.",
  },

  // Functional Foods, Nutrition & Smart Proteins
  {
    code: "BB-FN-01",
    categoryId: "functional-foods",
    title: "Affordable alternative protein from local feedstock",
    description:
      "Develop a protein ingredient from a regionally abundant crop, by-product or microbial source with credible cost and taste targets.",
  },
  {
    code: "BB-FN-02",
    categoryId: "functional-foods",
    title: "Micronutrient fortification that survives Indian cooking",
    description:
      "Deliver a fortification strategy that retains bioavailability through typical household preparation and storage.",
  },
  {
    code: "BB-FN-03",
    categoryId: "functional-foods",
    title: "Gut microbiome-informed functional food",
    description:
      "Design a food or supplement with a measurable microbiome-linked health outcome and a validation plan.",
  },
  {
    code: "BB-FN-04",
    categoryId: "functional-foods",
    title: "Clean-label preservation for packaged foods",
    description:
      "Replace a synthetic preservative with a biological alternative without compromising safety or shelf life.",
  },
  {
    code: "BB-FN-05",
    categoryId: "functional-foods",
    title: "Nutrition intervention for school and anganwadi programmes",
    description:
      "Propose a product and delivery model that measurably improves child nutrition within existing public programme constraints.",
  },

  // Environmental, Industrial & Waste-to-Value Biotech
  {
    code: "BB-EV-01",
    categoryId: "environmental-industrial",
    title: "Bioremediation of industrial effluent",
    description:
      "Treat a specific contaminant stream using microbial or enzymatic routes, with monitoring and disposal of the resulting biomass.",
  },
  {
    code: "BB-EV-02",
    categoryId: "environmental-industrial",
    title: "Plastic and textile waste depolymerisation",
    description:
      "Convert a hard-to-recycle waste polymer into reusable monomers or value-added products using biological catalysts.",
  },
  {
    code: "BB-EV-03",
    categoryId: "environmental-industrial",
    title: "Agri-residue to high-value bioproducts",
    description:
      "Turn crop residue that is currently burned into fuels, chemicals or materials with a workable collection model.",
  },
  {
    code: "BB-EV-04",
    categoryId: "environmental-industrial",
    title: "Industrial enzymes for greener processes",
    description:
      "Engineer or source an enzyme that removes heat, solvent or water intensity from an existing industrial step.",
  },
  {
    code: "BB-EV-05",
    categoryId: "environmental-industrial",
    title: "Water quality biosensing for local bodies",
    description:
      "Build a deployable biosensing approach that helps a municipality detect contamination events quickly and cheaply.",
  },

  // Open Bio Track
  {
    code: "BB-OB-01",
    categoryId: "open-bio-track",
    title: "Biotech for accessibility and assistive care",
    description:
      "Apply biological or biomedical engineering to improve independence for people with disabilities or chronic conditions.",
  },
  {
    code: "BB-OB-02",
    categoryId: "open-bio-track",
    title: "Open-source lab hardware and reagents",
    description:
      "Make an expensive lab capability affordable through open designs, local fabrication or reagent substitution.",
  },
  {
    code: "BB-OB-03",
    categoryId: "open-bio-track",
    title: "Biotechnology education and skilling tools",
    description:
      "Create a tool or curriculum that gives students genuine hands-on biotech experience without a well-funded lab.",
  },
  {
    code: "BB-OB-04",
    categoryId: "open-bio-track",
    title: "Synthetic biology for a local unmet need",
    description:
      "Use engineered biology responsibly to solve a problem specific to your region, including a biosafety discussion.",
  },
  {
    code: "BB-OB-05",
    categoryId: "open-bio-track",
    title: "Bio-based materials for everyday products",
    description:
      "Replace a petrochemical material in a common product with a bio-based alternative that performs comparably.",
  },
  {
    code: "BB-OB-06",
    categoryId: "open-bio-track",
    title: "Wildcard — your own bio-related problem",
    description:
      "Bring a bio-related problem of your own. You must supply a self-proposed title and justify the need, feasibility and impact.",
    wildcard: true,
  },
];

export const problemsByCategory = (categoryId: string) =>
  problems.filter((p) => p.categoryId === categoryId);

export const problemByCode = (code: string) => problems.find((p) => p.code === code);
