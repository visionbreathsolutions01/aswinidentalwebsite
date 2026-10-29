export const HOSPITAL_INFO = {
  name: "Aswini Super Speciality Dental Hospital",
  shortName: "Aswini Dental",
  tagline: "Leading Dental Care in Vijayawada Since 1996",
  establishedYear: 1996,
  doctor: {
    name: "Dr. B. Srinivasa Prasad",
    title: "Chief Dental Surgeon, Oral & Maxillofacial Specialist",
    degrees: "BDS, MDS (Oral & Maxillofacial Surgery)",
    experienceYears: 30,
    education: [
      { degree: "BDS", institution: "Bapuji College of Dental Sciences, Davangere", year: "1989" },
      { degree: "MDS - Oral & Maxillofacial Surgery", institution: "Rajah Muthiah Dental College Hospital, Annamalai University", year: "1992" }
    ],
    awards: [
      { title: "International Workshop on Brånemark System", institution: "RV Dental College", year: "1993" }
    ],
    teachingExperience: [
      { institution: "Krishnadevaraya Institute of Dental Sciences", period: "1994 - 2002" },
      { institution: "Narayana Dental College", period: "2002 - 2006" },
      { institution: "Drs. Sudha & Nageswara Rao Siddhartha Institute of Dental Sciences", period: "2006 - 2012" }
    ],
    memberships: [
      "Dental Council of India (DCI)",
      "Indian Dental Association (IDA)"
    ],
    bio: "Dr. B. Srinivasa Prasad is a renowned Dental Surgeon and Oral & Maxillofacial Specialist with over 30 years of clinical and surgical expertise. Having trained at prestigious dental institutions and served as a senior consultant across top dental colleges, Dr. Prasad founded Aswini Super Speciality Dental Hospital to bring world-class, international-grade dental care and compassionate treatment to patients in Vijayawada."
  },
  contact: {
    address: "Dr. No. 13-19-84 / 29-13-84, 1st Floor, Kaleswara Rao Road, Suryarao Pet, Vijayawada - 520002",
    fullAddress: "Dr. No. 13-19-84 / 29-13-84, 1st Floor, Kaleswara Rao Road, Suryarao Pet, Vijayawada - 520002",
    addressLine1: "Dr. No. 13-19-84 / 29-13-84, 1st Floor, Kaleswara Rao Road",
    addressLine2: "Suryarao Pet",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    pincode: "520002",
    phones: ["0866 2434669", "+91 9848121876"],
    whatsapp: "919848121876",
    email: "aswini.dental@gmail.com",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15301.158199068454!2d80.6327605!3d16.5114735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c6e2fe58e803497!2sAswini+Super+Speciality+Dental+Hospital!5e0!3m2!1sen!2sin!4v1561886599859!5m2!1sen!2sin",
    workingHours: [
      { days: "Monday - Saturday", time: "9:00 AM - 8:30 PM" },
      { days: "Sunday", time: "9:30 AM - 1:30 PM (Emergency by Appointment)" }
    ]
  }
};

export const SERVICES = [
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    category: "Restorative Dentistry",
    iconName: "ShieldCheck",
    shortDesc: "Tooth-colored, durable restorations to repair cavities, decay, and damaged teeth seamlessly.",
    fullDesc: "A filling is a way to restore a tooth damaged by decay back to its normal function and shape. When a dentist gives you a filling, he or she first removes the decayed tooth material, cleans the affected area, and then fills the cleaned out cavity with a filling material. By closing off spaces where bacteria can enter, a filling also helps prevent further decay. Materials used for fillings include gold, porcelain, a composite resin (tooth-colored fillings), and an amalgam (an alloy of mercury, silver, copper, tin and sometimes zinc).",
    benefits: [
      "Painless cavity restoration with natural enamel shading",
      "Prevents further tooth decay and nerve exposure",
      "Stops sensitivity to cold and sweet foods",
      "Preserves original tooth structure"
    ],
    detailedContent: [
      {
        heading: "Which Type of Filling is Best?",
        text: "No one type of filling is best for everyone. What's right for you will be determined by the extent of the repair, whether you have allergies to certain materials, where in your mouth the filling is needed, and the cost."
      },
      {
        heading: "Types of Filling Materials",
        list: [
          { title: "Gold Fillings", desc: "Gold fillings are made to order in a laboratory and then cemented into place. Gold inlays are well tolerated by gum tissues and may last more than 20 years. For these reasons, many authorities consider gold the best filling material. However, it is often the most expensive choice and requires multiple visits." },
          { title: "Amalgam (Silver) Fillings", desc: "Amalgam fillings are resistant to wear and relatively inexpensive. However, due to their dark color, they are more noticeable than porcelain or composite restorations and are not usually used in very visible areas, such as front teeth." },
          { title: "Composite (Plastic) Resins", desc: "Composite resins are matched to be the same color as your teeth and therefore used where a natural appearance is desired. The ingredients are mixed and placed directly into the cavity, where they harden. Composites may not be the ideal material for large fillings as they may chip or wear over time. They can also become stained from coffee, tea or tobacco, and do not last as long as other types of fillings generally from three to 10 years." },
          { title: "Porcelain Fillings", desc: "Porcelain fillings are called inlays or onlays and are produced to order in a lab and then bonded to the tooth. They can be matched to the color of the tooth and resist staining. A porcelain restoration generally covers most of the tooth. Their cost is similar to gold." }
        ],
        text2: "If decay or a fracture has damaged a large portion of the tooth, a crown, or cap, may be recommended. Decay that has reached the nerve may be treated in two ways: through root canal therapy (in which the damaged nerve is removed) or through a procedure called pulp capping (which attempts to keep the nerve alive)."
      },
      {
        heading: "What Happens When You Get a Filling?",
        text: "If your dentist decides to fill a cavity, he or she will first remove the decay and clean the affected area. The cleaned-out cavity will then be filled with any of the variety of materials described above."
      },
      {
        heading: "How Do I Know if I Need a Filling?",
        text: "Only your dentist can detect whether you have a cavity that needs to be filled. During a checkup, your dentist will use a small mirror to examine the surfaces of each tooth. Anything that looks abnormal will then be closely checked with special instruments. Your dentist may also X-ray your entire mouth or a section of it. The type of treatment your dentist chooses will depend on the extent of damage caused by decay."
      }
    ]
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    category: "Surgical Dentistry",
    iconName: "Stethoscope",
    shortDesc: "Safe, comfortable, and gentle extractions performed under sterile conditions.",
    fullDesc: "Ideally, a human being should have 32 teeth. But like we all know, not all the teeth come at once. It's between the ages of 17 and 25, the large teeth at the back \u2013 'the third molars' come through at last. These third molars are commonly called as wisdom teeth. We have four of them and they appear at the last. It was back in the 17th century that the third molars were called the 'teeth of wisdom' as they appeared when the individual is no longer a child. It's from the 19th century, the term 'teeth of wisdom' became 'wisdom teeth'. A wisdom tooth can grow sideways, crooked and misaligned and push on to the other teeth causing overcrowding and misalignment in the mouth.",
    benefits: [
      "Atraumatic extraction techniques minimizing tissue trauma",
      "Local anesthesia ensuring zero pain during procedure",
      "Post-operative care and instant healing guidance",
      "Seamless replacement planning with implants or bridges"
    ],
    detailedContent: [
      {
        heading: "Reasons to Consider Wisdom Teeth Removal",
        text: "Below are some of the reasons why one should consider removing their wisdom teeth:",
        list: [
          { title: "Pericoronitis", desc: "It is the inflammation of the tissue surrounding the wisdom tooth. It's commonly seen in young adults. Typical symptoms include swollen gums around the tooth, pain and bad taste in the mouth. More serious symptoms include fever, wisdom tooth abscess, and swelling." },
          { title: "Caries (Tooth Decay)", desc: "It's also called tooth decay and is a common issue with the wisdom tooth. If not properly taken care of, it would lead to pulpitis, which is the inflammation of the dental pulp. This can lead to severe pain and can lead to tooth root infection. Tooth root infection is another reason for tooth extraction." },
          { title: "Periodontitis", desc: "It affects the tissue and bone and can cause the tooth to loosen. Extraction and replacing it with prosthesis might be the only options left. Severe tooth or jaw trauma, root fracture are other reasons for which the tooth needs to be extracted." },
          { title: "Misalignment & Overcrowding", desc: "If they grow out in the wrong angle, causing to put pressure on the other teeth. There might not be enough room in the mouth to accommodate the new sets of wisdom teeth." }
        ]
      },
      {
        heading: "The Extraction Procedure",
        text: "The cost of extraction depends on how challenging it is to remove the tooth. The upper wisdom teeth are usually easier than the lower ones. Surgical extraction would be required if the tooth is partly or completely inside the jawbone. Local anesthesia is used to make the removal painless and comfortable. However, little pain and discomfort are common once the anesthesia wears off.",
        text2: "If the wisdom tooth is impacted and embedded in the bone, the dental surgeon removes the teeth in sessions to minimize the amount of bone removed. If the tooth is covered by the gum, an incision is made to reach it. Pressure might be felt when the tooth is removed, as the dental surgeon needs to pull the tooth back and forth before it is taken out. Pain will not be felt as the area surrounding teeth is numb. If a cut is made, dissolvable stitches are used to seal the gum."
      },
      {
        heading: "Post-Extraction Care",
        text: "Following the removal of the tooth, the patient will be asked to bite down a gauze so that it reduces the bleeding. After the tooth is extracted, the patient is likely to experience pain and swelling in that region. There might be some bleeding as well. However, some over the counter painkillers might be enough to manage the pain. Sometimes the dentist might prescribe some medications that need to be taken over the next few days.",
        text2: "It's best to avoid consuming solid and spicy foods, alcohol, coffee or other hot beverages in the coming days. One must remember not to brush their teeth on the very same day of the surgery. As wisdom teeth extraction can be a surgical procedure, like always one must remember it's always wise to seek a second opinion before any surgical procedure."
      }
    ]
  },
  {
    id: "bleeding-gums-treatment",
    title: "Bleeding Gums Treatment",
    category: "Periodontics",
    iconName: "HeartPulse",
    shortDesc: "Targeted gum disease therapy to stop bleeding, reduce swelling, and reverse gingivitis.",
    fullDesc: "Bleeding gums are an early sign of gum disease (gingivitis or periodontitis) caused by plaque buildup. Our specialized periodontal treatments eliminate deep bacteria, clean subgingival deposits, and restore strong, pink, healthy gums.",
    benefits: [
      "Stops gum bleeding during brushing or chewing",
      "Eliminates bad breath caused by bacterial accumulation",
      "Tightens loose gums around tooth roots",
      "Prevents bone loss around tooth structures"
    ]
  },
  {
    id: "flap-surgery",
    title: "Flap Surgery",
    category: "Periodontics",
    iconName: "Activity",
    shortDesc: "Advanced surgical treatment to clean deep periodontal pockets and preserve gum tissue.",
    fullDesc: "Gingival flap surgery is a type of gum procedure where the gums are separated from the teeth and folded back temporarily. This allows a dentist to reach the root of the tooth and the bone. Gingival flap surgery is used to treat gum disease (periodontitis) and may be recommended for people with moderate or advanced periodontitis. Usually, a treatment that doesn't involve surgery is done first, called scaling and root planing. If this treatment does not eliminate the gum infection, gingival flap surgery may be used. It also may be done along with another procedure known as osseous (bone) surgery.",
    benefits: [
      "Accesses deep periodontal pockets unreachable by scaling",
      "Stops severe gum infection and bone destruction",
      "Secures loose teeth and strengthens periodontium",
      "Restores tissue health and longevity"
    ],
    detailedContent: [
      {
        heading: "Preparation",
        text: "Your periodontist or your dental hygienist will first remove all plaque and tartar (calculus) from around your teeth. He or she will make sure that your oral hygiene is good. Your periodontist also will evaluate your health and the medicines you take. This is important to make sure that surgery is safe for you."
      },
      {
        heading: "How It's Done",
        text: "First you will get a shot to numb the area. Then the periodontist will use a scalpel to separate the gums from the teeth. They will be lifted or folded back in the form of a flap. This gives the periodontist direct access to the roots and bone supporting the teeth.",
        text2: "Inflamed tissue will be removed from between the teeth and from any holes (defects) in the bone. The periodontist then will do a procedure called scaling and root planing to clean plaque and tartar. If you have bone defects, your periodontist may eliminate them. This procedure is called osseous recontouring. It smoothes the edges of the bone using files or rotating burs. Finally, the gums will be placed back against the teeth and stitched in place. Some periodontists use stitches that dissolve on their own. Others use stitches that have to be removed a week to 10 days later. Your periodontist also may cover the surgical site with a bandage. This is called a periodontal pack or dressing."
      },
      {
        heading: "Follow-Up & Post-Operative Care",
        text: "You will have mild to moderate discomfort after the procedure. Your periodontist can prescribe pain medicine to control it. Many people feel fine with just an over-the-counter pain reliever. It is very important for you to keep your mouth as clean as possible while the surgical site is healing.",
        list: [
          { title: "Oral Hygiene & Cleaning", desc: "Brush and floss the rest of your mouth normally. If the surgical site is not covered by a periodontal pack, you can use a toothbrush to gently remove plaque from the teeth." },
          { title: "Antimicrobial Mouth Rinses", desc: "Antimicrobial mouth rinses containing chlorhexidine are often prescribed after gum surgery. These rinses kill bacteria, delay plaque growth and help your mouth to heal." },
          { title: "Managing Swelling", desc: "You may have some swelling. This can be reduced if you apply an ice pack to the outside of your face in the treated area." },
          { title: "Antibiotics & Re-examination", desc: "In some situations, antibiotics may be prescribed to prevent an infection. Be sure to take them as instructed. Your periodontist will want to reexamine the area in 7 to 10 days." }
        ]
      }
    ]
  },
  {
    id: "gum-disease-surgery",
    title: "Gum Disease Surgery",
    category: "Periodontics",
    iconName: "Cross",
    shortDesc: "Comprehensive surgical procedures for advanced periodontitis and gum tissue repair.",
    fullDesc: "Periodontal disease attacks the gums and the bone that support the teeth. Plaque is a sticky film of food debris, bacteria, and saliva. If plaque is not removed, it turns into calculus (tartar). When plaque and calculus are not removed, they begin to destroy the gums and bone. Most people are not aware of it because the disease is usually painless in the early stages. Good oral hygiene, a balanced diet, and regular dental visits can help reduce your risk of developing periodontal disease.",
    benefits: [
      "Halts progress of chronic periodontitis",
      "Regenerates lost bone and attachment tissue",
      "Reduces deep gum pockets and bacterial harbor areas",
      "Improves aesthetics and functional oral comfort"
    ],
    detailedContent: [
      {
        heading: "Untreated orthodontic problems can cause:",
        list: [
          { title: "Bleeding gums", desc: "Gums should never bleed, even when you brush vigorously or use dental floss." },
          { title: "Loose teeth", desc: "Also caused by bone loss or weakened periodontal fibres." },
          { title: "New spacing between teeth", desc: "Caused by bone loss." },
          { title: "Persistent bad breath", desc: "Caused by bacteria in the mouth." },
          { title: "Pus around the teeth and gums", desc: "Sign that there is an infection present." },
          { title: "Receding gums", desc: "Loss of gum around a tooth." },
          { title: "Red and puffy gums", desc: "Gums should never be red or swollen." },
          { title: "Tenderness or Discomfort", desc: "Plaque, calculus, and bacteria irritate the gums and teeth." }
        ]
      },
      {
        heading: "Treatment",
        text: "Treatment is rendered based on the stage of the disease. If the disease is caught in the early stages and no damage has been done, one to two regular cleanings will be recommended. You will also be given instructions on improving your daily oral hygiene habits and having regular dental cleanings.",
        text2: "If the disease has progressed to more advanced stages, a special periodontal cleaning called scaling and root planing or a Flap surgery (deep cleaning) will be recommended. This procedure helps gum tissue to heal and pockets to shrink. Medications, special medicated mouth rinses may be recommended to help control infection and healing."
      }
    ]
  },
  {
    id: "oral-maxillofacial-surgery",
    title: "Oral & Maxillofacial Surgery",
    category: "Specialized Surgery",
    iconName: "UserCheck",
    shortDesc: "Expert surgical care for jaw disorders, facial trauma, wisdom teeth, and oral pathology.",
    fullDesc: "You can think of the oral and maxillofacial region of your body like the mouth and all its connecting regions. You obviously chew with your jawbone and your teeth. This area is part of the network with your face, head, and neck. When you have oral and maxillofacial surgery, someone operates on your face. The only question is exactly where this happens. Now that you know where it happens, you can guess the causes for this kind of surgery. The most frequent reason is that you need to replace some teeth. Generally, this happens due to trauma or illness. A punch in the mouth or car wreck might displace your teeth. The surgery would fix or replace the impacted area. You also might develop a disease in your mouth or its surrounding region. A tumor or cyst could jeopardize your health, especially if any cancerous cells are a part of the infected area. When that happens, you may need part of your jaw removed or reconstructed. Of course, you could require this sort of surgery for simpler reasons. The hinge of your jaw might not function right. If so, temporomandibular joint surgery (TJS) will correct the issue. Simple jaw alignment is another possibility. Oral and maxillofacial surgery treats numerous conditions, some of which are more serious than others.",
    benefits: [
      "Led by Senior Specialist with 30+ years surgical expertise",
      "Complex wisdom tooth, cyst, and jaw reconstructive surgery",
      "Facial trauma and TMJ pain management",
      "Full adherence to international sterilization standards"
    ],
    detailedContent: [
      {
        heading: "What Do Oral and Maxillofacial Surgeons Do?",
        text: "The short answer is that they do most of the treatments and surgeries listed above. A specialist in this type of dentistry has to do a lot more emergency work than others. Many times, a patient suffers a car accident or athletic injury that requires immediate attention. In those instances, the oral and maxillofacial surgeon must treat people in crisis situations.",
        text2: "The job has many other requirements beyond crisis support, though. This kind of specialist must know and treat a range of injuries and illnesses across four major parts of the body: the neck, face, jaw, and mouth. The most frequent surgery is tooth extraction, especially when a person suffers from impacted wisdom teeth. Sometimes, this surgery isn't an emergency decision but a proactive one to prevent later tooth problems. Some conditions may require this sort of surgery. People with cleft palates and lips can receive treatment to correct the problem. An oral and maxillofacial surgeon will alter the facial structure to fix the physical issue. It's considered a medical rather than cosmetic surgery, though. Oral and maxillofacial surgeons must know how to treat hard and soft tissue issues. A professional must work on sensitive areas like the gums and tough structures like the jawbone and parts of the neck. It's a demanding job, as the surgeon must understand all dentistry, general medicine, and many forms of surgery."
      },
      {
        heading: "How Does a Person Become an Oral and Maxillofacial Surgeon?",
        text: "Since Oral and Maxillofacial Surgery encompasses so many areas of medical skills, it's a difficult field to enter. A would-be surgeon must finish dental school. Otherwise, they would lack the training to diagnose and treat basic mouth and tooth issues.",
        text2: "After dental school, the surgeon must study for another four years at a minimum, sometimes as many as six years. The doctor needs this additional time to master surgical skills. They also must train in the treatment of head, neck, and jaw injuries. Other than actual anesthesiologists, this field is the only one whose professionals can give all types of sedation as treatment."
      }
    ]
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    iconName: "Sparkles",
    shortDesc: "Professional clinic-grade teeth whitening to brighten your smile up to several shades.",
    fullDesc: "Tooth \"whitening\" is defined as any process that will make teeth appear whiter. There are two ways this is commonly done: bleaching and non-bleaching whitening products. Often the terms \"bleaching\" and \"whitening\" are used interchangeably, but the U.S. Food and Drug Administration (FDA) states the term \"bleaching\" can only be used when a product contains bleach. A product is considered simply \"whitening\" when it removes food or debris from the teeth without bleach. Bleaching products contain peroxide (hydrogen peroxide or carbamide peroxide) and these products remove both surface and deep stains on teeth and can cause teeth to become even lighter than their natural shade.",
    benefits: [
      "Noticeably brighter smile in a single clinic session",
      "Safe formulations gentle on enamel and gums",
      "Removes deep intrinsic and extrinsic stains",
      "Boosts confidence and youthful appearance"
    ],
    detailedContent: [
      {
        heading: "What's in Bleaching Products?",
        text: "The active ingredient in tooth whiteners available from dentists or drugstores is peroxide (hydrogen or carbamide). Hydrogen peroxide is the actual bleaching agent, while carbamide peroxide breaks down into hydrogen peroxide.",
        text2: "The bleaching products you can get from a dentist are much stronger than those purchased over-the-counter. Whiteners used by dentists may have as much as 35% to 45% peroxide while the store-bought whitening kits such as whitening strips or trays usually have just 7% peroxide. Other ingredients in both dentist-dispensed and OTC whiteners include glycerin, sodium hydroxide, and flavorings."
      },
      {
        heading: "Let the Dentist do the Whitening",
        text: "The American Dental Association (ADA) recommends if you choose to bleach your teeth you consult a dentist first. A dentist can come up with the best whitening options for you and supervise a treatment plan to avoid complications.",
        text2: "Professional whitening can be done in a dentist's office in about an hour. The procedure involves the application of a tooth whitening gel containing between 25% to 40% hydrogen peroxide, and then aiming a special heating lamp at your teeth for three 20-minute intervals, with reapplication of the gel between intervals. Some dentists may also use a laser, which is reported to accelerate or activate the whitening process. A protective barrier is used during the whitening procedure to keep your lips, gums, and tongue away from the whitening gel so it stays in place on your teeth. For optimal results, the dentist will usually give you whitening trays molded for your teeth so you can follow-up at home with bleaching solutions."
      }
    ]
  },
  {
    id: "dental-braces-fixing",
    title: "Dental Braces Fixing",
    category: "Orthodontics",
    iconName: "Smile",
    shortDesc: "Orthodontic alignment solutions including ceramic, metal, and clear aligner braces.",
    fullDesc: "The benefits of orthodontic treatment often go beyond the obvious physical changes of an improved bite and straighter teeth; it's also a great way to improve a person's overall self-image. While having beautiful straight teeth is important, even more important is the need to alleviate any potential health problems associated with the teeth or jaw. Problems caused by crooked teeth or jaw may contribute to improper cleaning of teeth, leading to tooth decay and, possibly, gum disease or total tooth loss.",
    benefits: [
      "Aligns crooked, crowded, or spaced teeth",
      "Corrects overbite, underbite, and crossbite disorders",
      "Options for metal, ceramic (invisible), or clear aligners",
      "Improves chewing function and long-term oral hygiene"
    ],
    detailedContent: [
      {
        heading: "Untreated orthodontic problems can cause:",
        list: [
          { title: "Chewing & Digestion Difficulties", desc: "Improper tooth contact hinders proper food breakdown." },
          { title: "Speech Impairments", desc: "Misalignments affecting clear speech and vocal articulation." },
          { title: "Abnormal Wear of Tooth Surfaces", desc: "Uneven enamel friction causing premature wear and tooth sensitivity." },
          { title: "Jaw Joint & Facial Pain", desc: "Excessive strain on gum tissue and supporting bone affecting jaw joints, leading to headaches, face, and neck pain." }
        ]
      },
      {
        heading: "The Treatment of Different Facial & Dental Aspects:",
        list: [
          { title: "Gap Closure", desc: "Closing wide gaps between the teeth." },
          { title: "Crooked Teeth Alignment", desc: "Alignment of crooked teeth for a symmetrical smile." },
          { title: "Tip Straightening", desc: "Straightening the tips of the teeth." },
          { title: "Oral Function Improvement", desc: "Improvement of essential oral functions such as speaking and eating." },
          { title: "Long-Term Oral Health", desc: "Improvement of the long-term health of gums and teeth." },
          { title: "Bite Imbalance Correction", desc: "Correction of an imbalanced and improper bite which causes excessive trauma to the teeth." }
        ]
      },
      {
        heading: "Treatment Options",
        text: "There are a lot of treatment options these days, from retainers to clear aligners to invisible, metal, ceramic and micro braces. They each have their uses. Orthodontists have the specialised knowledge to consider all possibilities and thoroughly discuss which treatment option is best suited for you!"
      }
    ]
  },
  {
    id: "teeth-reshaping",
    title: "Teeth Reshaping",
    category: "Cosmetic Dentistry",
    iconName: "Scissors",
    shortDesc: "Enamel re-contouring to smooth minor chips, uneven lengths, and overlapping tooth edges.",
    fullDesc: "Tooth reshaping, also called dental contouring, is a cosmetic dentistry technique that removes small amounts of tooth enamel (the outer covering of the tooth) in order to change the shape, length, or surface of one or more teeth. The procedure is usually done to correct crooked teeth, chipped teeth, cracked teeth or even overlapping teeth. This procedure is even a substitute for braces under certain circumstances. This is also a procedure of subtle changes. A few millimeters of reduction and a few millimeters of tooth-colored laminate can create a beautiful smile when performed by a cosmetic dentist, with no discomfort to you.",
    benefits: [
      "Painless, single-visit cosmetic correction",
      "No anesthesia required for surface contouring",
      "Fixes minor chips, overlaps, and rough edges",
      "Instant improvement in smile harmony"
    ],
    detailedContent: [
      {
        heading: "Who is a candidate for tooth contouring and reshaping?",
        text: "If you want your teeth to be free of chips and fractures, appear less crowded, and have decreased overlaps or to be without pits or grooves in the enamel, this procedure should be discussed with your cosmetic dentist. With a little dental contouring, you can make a huge difference in the way you feel about your smile.",
        text2: "Tooth contouring by a cosmetic dentist does require that you have normal, healthy teeth. Teeth may become weaker if large amounts of enamel are removed, which is why tooth reshaping should be limited to minor changes or combined with veneers or bonding for the best smile."
      },
      {
        heading: "How is teeth contouring done?",
        text: "To reshape or contour teeth, a dentist gently removes tooth enamel with a laser or drill. Before starting the treatment, the dentist X-rays the teeth to evaluate the size and location of the pulp of each tooth to ensure that there's enough bone between the teeth to support them.",
        text2: "Next, they trim misshapen areas, shortening excessively long teeth or altering badly shaped teeth to even them out for proper bite and alignment. The teeth are then smoothed and polished. Reshaping may require just one 30-minute appointment with the dentist, depending on the extent of the work you need."
      },
      {
        heading: "What is bonding and why is done with teeth reshaping?",
        text: "Combining bonding with reshaping can fill in chips and gaps between teeth, add shape and improve tooth color. Bonding involves applying a puttylike resin, which adheres to the teeth and hardens. The resin is colored to provide the best result, either to match or improve the natural tooth color.",
        text2: "Before applying the resin, the dentist etches the tooth surface with a Dremel-like tool so that the resin adheres well. This can cause some sensitivity, so the dentist may numb the tooth area. He or she may also paint the teeth with a conditioning liquid, which also helps the resin stick to the teeth. After applying the resin and shaping it, a light is shined against it for hardening. Bonding takes 30 minutes to an hour, and if more than one tooth is being treated, the patient may need several appointments."
      }
    ]
  },
  {
    id: "polishing",
    title: "Polishing",
    category: "Preventive Care",
    iconName: "Award",
    shortDesc: "Dental scaling and polishing to leave teeth smooth, clean, and stain-free.",
    fullDesc: "Tooth polishing is a procedure which not only polishes the teeth but also removes the dental stains, plaque, and microorganisms formed on the outer surface of the teeth. The main advantage of tooth polishing over tooth scaling (deep cleaning of the teeth) is that it is a painless procedure. Also, patients experience clean and smooth teeth instantaneously after the procedure.",
    benefits: [
      "Smooths enamel surfaces to prevent plaque adherence",
      "Removes coffee, tea, and tobacco surface stains",
      "Leaves mouth feeling clean, fresh, and rejuvenated",
      "Essential component of routine preventive checkups"
    ],
    detailedContent: [
      {
        heading: "Types of Tooth Polishing",
        list: [
          { title: "Therapeutic Polishing", desc: "Many times during a dental surgical procedure, the cementum covering the root is exposed. Therapeutic polishing assists in the removal of any microflora and endotoxins from the surface of cementum." },
          { title: "Coronal / Cosmetic Polishing", desc: "This type of polishing removes plaque and superficial dental stains. Superfine abrasive agents are used to make the enamel (outer layer covering the crown of the tooth) lustrous. The enamel surface is polished to an extent that can even reflect visible light." },
          { title: "Superficial Polishing", desc: "This technique polishes the crown of the tooth. However, this technique has nominal curative benefits, and is primarily done to improve the aesthetic appearance of the teeth." },
          { title: "Selective Polishing", desc: "Also termed as extrinsic stain removal or selective stain removal. This polishing technique is recommended post scaling procedure, and it removes any remaining stains." }
        ]
      }
    ]
  },
  {
    id: "conservative-dentistry",
    title: "Conservative Dentistry",
    category: "Restorative Dentistry",
    iconName: "Layers",
    shortDesc: "Minimally invasive dentistry focused on saving natural teeth and preserving enamel.",
    fullDesc: "Conservative Dentistry is the branch of dentistry which is concerned with the conservation of teeth in the mouth. It embraces the practice of operative dentistry and endodontics, and includes various kinds of direct and indirect restorations of individual teeth in the mouth.",
    benefits: [
      "Preserves original natural tooth structure wherever possible",
      "Prevents premature extractions",
      "Advanced biocompatible restorative materials",
      "Long-term structural preservation"
    ],
    detailedContent: [
      {
        heading: "Primary Goal & Clinical Focus",
        text: "The primary goal of Conservative Dentistry & Endodontics encompasses the diagnosis and treatment of sequelae of dental caries and includes the techniques and procedures to restore the teeth to full function & appearance in an aesthetically pleasing manner with as little loss of healthy tooth structure as possible.",
        text2: "It also involves performing root canal treatment and associated surgical procedures to rid the tooth of its offending malady. The treatments provided include various fillings, root canal treatment, surgical endodontics, endodontic implants, bleaching, & management of traumatized teeth."
      },
      {
        heading: "Advanced Equipment & Infrastructure",
        text: "Our department has state-of-the-art equipment which includes digital radiography & intraoral imaging, apex locators, dentine desensitizers & odontometers, thermoplasticized G.P. systems, thermaprep plus kit ovens, and reduction gear hand-pieces.",
        text2: "A fully installed ceramic unit and restorative Dental Laboratory capable of doing specialized laboratory work helps deliver comprehensive, high-precision treatment."
      }
    ]
  },
  {
    id: "artificial-teeth",
    title: "Artificial Teeth (Dentures & Implants)",
    category: "Prosthodontics",
    iconName: "CheckCircle2",
    shortDesc: "High-quality dentures, bridges, and dental implants to replace missing teeth.",
    fullDesc: "The process of denture development takes approximately three to six weeks and a number of appointments. As soon as your prosthodontist (a dentist who specializes in the replacement and restoration of teeth) or dentist determines the type of appliance that is best suited for you, the first step is to make various impressions of your jaw, so as to take measurements of the relation and space in between your jaws.",
    benefits: [
      "Restores full chewing ability and speech clarity",
      "Custom shades and contours matching natural facial aesthetics",
      "Options for fixed bridges, removable dentures, and dental implants",
      "Prevents surrounding teeth from shifting"
    ],
    detailedContent: [
      {
        heading: "Steps in Denture & Bridge Fabrication",
        text: "The next step is to create wax forms, models, and plastic patterns in the precise shape and location of the denture to be prepared. You will have to try out this model multiple times and then there will be an assessment of the denture for shape, fit and color before the casting of the final denture. After the whole assessment, the part is done and the denture is finally made, it needs to be cast in your mouth. Lastly, there will be some adjustments made, only if necessary.",
        text2: "One or more teeth is replaced by a fixed bridge by positioning the crowns on the teeth on one side of the space and joining the artificial teeth to them. After this, the \"bridge\" is cemented into place. Artificial teeth not only fill the spaces made by the missing teeth, it prevents the teeth from changing its position too."
      },
      {
        heading: "Are there any side effects?",
        text: "New dentures will feel a little loose or odd for a few weeks in the beginning as the muscles of the tongue and cheeks need to learn to keep them intact after some time and you get comfortable putting them inside and removing them. Along with this, there will be soreness, minor irritation and increased flow of saliva. But these conditions will diminish as soon as the mouth adjusts."
      }
    ]
  },
  {
    id: "impacted-tooth-extraction",
    title: "Impacted Tooth Extraction",
    category: "Specialized Surgery",
    iconName: "AlertTriangle",
    shortDesc: "Specialized surgical removal of impacted wisdom teeth and trapped molars.",
    fullDesc: "An impacted tooth is a tooth that, for some reason, has been blocked from breaking through the gum. Sometimes a tooth may be only partially impacted, meaning it has started to break through. Oftentimes, impacted teeth cause no obvious symptoms and are only discovered during a routine X-ray at the dentist's office.",
    benefits: [
      "Relieves severe jaw pain, head pressure, and swelling",
      "Prevents damage to adjacent teeth and jaw bone",
      "Performed by Senior Maxillofacial Surgeon",
      "Quick healing with comprehensive post-op care"
    ],
    detailedContent: [
      {
        heading: "Which teeth are most often impacted?",
        text: "Wisdom teeth, which are usually the last teeth to grow in — typically between the ages of 17 to 21 — are most typically impacted. By the time that wisdom teeth — also known as \"third molars\" — come in, the jaw has often stopped growing. The mouth and jaw may thus be too small to accommodate them. Because there's no real need for wisdom teeth anymore, they're typically removed if they're a problem. If you have a small jaw, you're more likely to have impacted wisdom teeth.",
        text2: "The second most common teeth to be impacted are the maxillary canines, also referred to as the cuspid or upper eyeteeth. Because these teeth play a more important role in your mouth, your doctor is more likely to recommend treatments that encourage these teeth to erupt instead of removing them."
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Priyanka",
    procedure: "Crowns & Bridges Fixing, Gum Infection",
    rating: 5,
    text: "Visited for Crowns and Bridges Fixing, Broken Teeth. Visited Dr. B. Srinivasa Prasad for replacing my old Tooth crown and for treating a gum infection that was causing bad breath and discomfort. Extremely happy with the treatment!"
  },
  {
    name: "Mr. L. Mahesh",
    procedure: "General Dental Care & Restoration",
    rating: 5,
    text: "Just have to say a very caring dentist who excels in reassuring their patients and gives excellent service, explains what they are doing every step of the way. The best dentist I have ever seen."
  },
  {
    name: "Mr. M. Suresh",
    procedure: "Dental Checkup & Treatment",
    rating: 5,
    text: "I found the reception staff to be most welcoming, approachable, and professional. The dentist and nurse work well together, you feel instantly at ease with them."
  },
  {
    name: "Showkath",
    procedure: "Specialist Dental Consultation",
    rating: 5,
    text: "I suggest to every person if they are suffering from any dentist problem so kindly consult Dr. B. Srinivasa Prasad from Aswini Dental Hospital."
  },
  {
    name: "Avijeet",
    procedure: "Consultation & Specialist Care",
    rating: 5,
    text: "Very professional, listened to my queries and provided response patiently. Definitely my go-to dental specialist from now."
  },
  {
    name: "Jayanth Pillai",
    procedure: "Dental Procedure & Guidance",
    rating: 5,
    text: "Dr. B. Srinivasa Prasad is informative and elaborate on the details of the procedure being carried out."
  },
  {
    name: "Joy Nicholas",
    procedure: "Facial Bone Fracture Surgery & Plate Fixation",
    rating: 5,
    text: "I am deeply grateful to Dr. Srinivas Prasad Garu for his exceptional expertise, professionalism, and compassionate care. I suffered facial bone fractures in an accident at a very young age, and his dedication and surgical expertise played a major role in my recovery. Despite the complexity of the procedure, he performed the surgery from inside the mouth to avoid visible scars on my face. His careful approach and commitment to achieving the best possible outcome made a significant difference in my life. From the initial treatment through the successful fixation of the plates, he treated me with great care and dedication. Today, I am able to speak normally and live my life with confidence, and I will always be grateful for his efforts. His skill, kindness, and commitment are something I will never forget. A heartfelt thank you to Dr. Srinivas Prasad Garu for everything he has done for me."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Personalised Care",
    desc: "The same senior doctor attends your problem from start to finish for consistent care and deep medical history knowledge.",
    icon: "UserCheck"
  },
  {
    title: "Senior Specialist Led",
    desc: "Helmed by Dr. B. Srinivasa Prasad with 30+ years of surgical experience in Oral & Maxillofacial care.",
    icon: "Award"
  },
  {
    title: "Best-in-Class Sterilization",
    desc: "Strict adherence to international hygiene and sterilization protocols for complete infection control.",
    icon: "Shield"
  },
  {
    title: "Modern Infrastructure",
    desc: "Equipped with advanced dental operating chairs, digital diagnostics, and modern equipment.",
    icon: "Sparkles"
  },
  {
    title: "Comprehensive Treatments",
    desc: "All dental specializations under one roof — from preventive scaling to complex jaw surgeries.",
    icon: "Heart"
  },
  {
    title: "28+ Years of Trust in Vijayawada",
    desc: "Serving thousands of smiling families in Suryarao Pet and across Vijayawada since 1996.",
    icon: "CheckCircle"
  }
];

export const BLOG_POSTS = [
  {
    id: "myths-and-facts-about-root-canal-treatment",
    title: "Myths and Facts About Root Canal Treatment",
    date: "July 2019",
    category: "Endodontics",
    image: "https://aswini-dental.com/wp-content/uploads/2019/07/facts-about-root.jpg",
    summary: "Debunking common misconceptions about root canal therapy and revealing why it is actually a painless, tooth-saving procedure.",
    content: "Root canal treatment (RCT) is often misunderstood. Many patients believe it is painful, but modern anesthesia makes RCT no more uncomfortable than receiving a standard filling. A root canal removes infected pulp, cleans the internal tooth canals, and seals it permanently—saving your natural tooth from extraction."
  },
  {
    id: "benefits-of-single-tooth-dental-implants",
    title: "Benefits of Single Tooth Dental Implants",
    date: "July 2019",
    category: "Implantology",
    image: "https://aswini-dental.com/wp-content/uploads/2019/07/benefits-of-single-tooth.jpg",
    summary: "Discover how single tooth implants offer the most natural, durable, and permanent solution for missing teeth.",
    content: "When you lose a single tooth, a dental implant provides a titanium root replacement topped with a custom porcelain crown. Unlike dental bridges, implants do not require grinding down adjacent healthy teeth. They preserve jawbone density, prevent facial sagging, and function exactly like your original tooth."
  },
  {
    id: "6-ways-to-fix-crooked-teeth",
    title: "6 Ways to Fix Crooked Teeth",
    date: "July 2019",
    category: "Orthodontics",
    image: "https://aswini-dental.com/wp-content/uploads/2019/07/6-ways-to-set-cracked-teth.jpg",
    summary: "Explore modern solutions ranging from traditional braces and clear aligners to cosmetic dental veneers.",
    content: "Crooked teeth affect not only appearance but also chew function and oral hygiene. Solutions include: 1. Metal Braces 2. Ceramic Braces 3. Clear Aligners 4. Dental Veneers 5. Tooth Reshaping (Contouring) 6. Dental Bonding. A specialist consultation will determine the ideal treatment for your bite structure."
  },
  {
    id: "what-are-zirconium-crowns",
    title: "What Are Zirconium Crowns?",
    date: "July 2019",
    category: "Prosthodontics",
    image: "https://aswini-dental.com/wp-content/uploads/2019/07/zicronia.jpg",
    summary: "Learn why Zirconia crowns are the gold standard in modern cosmetic and restorative crown placement.",
    content: "Zirconium crowns are crafted from zirconium dioxide, an exceptionally strong ceramic material. They offer unmatched durability, 100% biocompatibility (metal-free), and translucent light reflection that perfectly mimics natural tooth enamel."
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Main Dental Operatory Hall", category: "Clinic Infrastructure", image: "/gallery/gallery-1.jpg" },
  { id: 2, title: "Specialist Dental Chair & Suite", category: "Equipment", image: "/gallery/gallery-2.jpg" },
  { id: 3, title: "Sterilization & Autoclave Unit", category: "Sterilization", image: "/gallery/gallery-3.jpg" },
  { id: 4, title: "Surgical Operatory & Treatment Bay", category: "Specialized Surgery", image: "/gallery/gallery-4.jpg" },
  { id: 5, title: "Patient Lounge & Upper Reception", category: "Clinic Infrastructure", image: "/gallery/gallery-5.jpg" },
  { id: 6, title: "Glass Partition Entrance Corridor", category: "Clinic Infrastructure", image: "/gallery/gallery-6.jpg" },
  { id: 7, title: "ICU & Post-Operative Recovery Room", category: "Patient Care", image: "/gallery/gallery-7.jpg" },
  { id: 8, title: "Ergonomic Dental Operatory Chair", category: "Equipment", image: "/gallery/gallery-8.jpg" },
  { id: 9, title: "Patient Waiting Lounge Seating", category: "Patient Care", image: "/gallery/gallery-9.jpg" },
  { id: 10, title: "Specialist Operatory & Diagnostic Unit", category: "Equipment", image: "/gallery/gallery-10.jpg" },
  { id: 11, title: "In-Patient Room Hallway & Corridor", category: "Clinic Infrastructure", image: "/gallery/gallery-11.jpg" },
  { id: 12, title: "Glass Operatory Suite Entrance", category: "Clinic Infrastructure", image: "/gallery/gallery-12.jpg" },
  { id: 13, title: "Advanced Operation Theater & OT Table", category: "Specialized Surgery", image: "/gallery/gallery-13.jpg" },
  { id: 14, title: "Multi-Chair Dental Treatment Suite", category: "Equipment", image: "/gallery/gallery-14.jpg" },
  { id: 15, title: "Patient Recovery Ward Beds", category: "Patient Care", image: "/gallery/gallery-15.jpg" },
  { id: 16, title: "Dental Implant Aesthetic Center Chair", category: "Equipment", image: "/gallery/gallery-16.jpg" },
  { id: 17, title: "Wide Clinical Operatory & Lighting System", category: "Equipment", image: "/gallery/gallery-17.jpg" },
  { id: 18, title: "Surgical OT & Anesthesia Workstation", category: "Specialized Surgery", image: "/gallery/gallery-18.jpg" }
];
