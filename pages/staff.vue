<template>
  <div class="px-4 py-16 max-w-6xl mx-auto">
    <h1 class="text-5xl font-black text-purple-950 mb-4">Staff</h1>
    <p class="text-lg text-gray-700 mb-12">The team building pathways for the next generation of STEM leaders.</p>

    <!-- Founders -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-purple-900 mb-8">Executive Board</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div v-for="member in founders" :key="member.name" class="bg-white/70 rounded-2xl shadow p-4 flex flex-col items-center text-center">
          <img v-if="member.image" :src="member.image" :alt="member.name" class="w-24 h-24 rounded-full object-cover mb-3 bg-purple-100" />
          <div v-else class="w-24 h-24 rounded-full mb-3 bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-400">{{ member.name[0] }}</div>
          <p class="font-bold text-purple-950 text-base">{{ member.name }}</p>
          <p class="text-purple-700 text-sm font-semibold mb-2">{{ member.role }}</p>
          <p class="text-gray-600 text-sm"><span class="font-semibold text-purple-950">{{ member.name }}</span> {{ member.bio }}</p>
        </div>
      </div>
    </section>

    <!-- Directors & Head Mentors -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-purple-900 mb-8">Leadership</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="member in leadership" :key="member.name" class="bg-white/70 rounded-2xl shadow p-4 flex flex-col items-center text-center">
          <img v-if="member.image" :src="member.image" :alt="member.name" class="w-24 h-24 rounded-full object-cover mb-3 bg-purple-100" />
          <div v-else class="w-24 h-24 rounded-full mb-3 bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-400">{{ member.name[0] }}</div>
          <p class="font-bold text-purple-950 text-base">{{ member.name }}</p>
          <p class="text-purple-700 text-sm font-semibold mb-2">{{ member.role }}</p>
          <p v-if="member.bio" class="text-gray-600 text-sm"><span class="font-semibold text-purple-950">{{ member.name }}</span> {{ member.bio }}</p>
        </div>
      </div>
    </section>

    <!-- Staff -->
    <section>
      <h2 class="text-3xl font-bold text-purple-900 mb-8">Staff</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="member in generalStaff" :key="member.name" class="bg-white/70 rounded-2xl shadow p-4 flex flex-col items-center text-center">
          <img v-if="member.image" :src="member.image" :alt="member.name" class="w-24 h-24 rounded-full object-cover mb-3 bg-purple-100" />
          <div v-else class="w-24 h-24 rounded-full mb-3 bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-400">{{ member.name[0] }}</div>
          <p class="font-bold text-purple-950 text-base">{{ member.name }}</p>
          <p v-if="member.bio" class="text-gray-600 text-sm mt-1"><span class="font-semibold text-purple-950">{{ member.name }}</span> {{ member.bio }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      founders: [
        {
          name: "Wenhao",
          role: "Founder, CEO",
          bio: "is a USAJMO Honorable Mention who scored 11 on the AIME and competes in the USACO Platinum division. He loves combinatorics and algebra, and his club baseball team peaked at #75 nationally.",
          image: "/staff/wenhaolu.png",
        },
        {
          name: "David",
          role: "Founder, COO",
          bio: "is an AIME score-8 qualifier in the USACO Platinum division with a perfect AMC 8 score and AMC 10 Distinguished Honor Roll. He holds a USCF chess rating of 2000 and finished 13th at HMMT individual rounds.",
          image: "/staff/davidzhang.png",
        },
        {
          name: "Andrew",
          role: "Founder, CTO",
          bio: "is a USACO Gold competitor fluent in C++, Java, JavaScript, React, Vue, and Python. Outside of coding, he enjoys basketball and music and is currently exploring machine learning.",
          image: "/staff/andrewzhao.png",
        },
        {
          name: "Jonathan",
          role: "Founder, CFO",
          bio: "is a USACO Silver competitor and AMC 8 Honorable Mention with a love for geometry. He enjoys basketball, drawing, and cooking in his free time.",
          image: "/staff/jonathanliu.png",
        },
      ],
      leadership: [
        {
          name: "Ryan Ahn",
          role: "Competition Director",
          bio: "is a high school junior interested in computational biology and a co-organizer of the YIMO focusing on competition logistics. He is the Founder and Executive Director of STEMise and an Operations Analyst Executive at BioCatalysis. In his free time, he likes to play video games, go out with friends, and read about the latest biology news.",
          image: "/staff/ryanahn.png",
        },
        {
          name: "Andrew Zhang",
          role: "Competition Director",
          bio: "is a high school senior interested in physics and mathematics. He serves as the President of his school's physics club and Captain of Lincoln-Douglas Debate. In his free time, he enjoys watching F1, playing basketball, and playing Clash of Clans.",
          image: "/staff/andrewzhang.png",
        },
        {
          name: "Hyunjun Yi",
          role: "Competition Director",
          bio: "is an AMC-12 Perfect Scorer who now works as a Deputy Executive Director at STEMise. Growing up in the Netherlands, he likes to hang out with his friends and listen to music in his free time.",
          image: "/staff/junyi.png",
        },
        {
          name: "Daniel Edouard",
          role: "Marketing Director",
          bio: "is a Merit-Based Harvard Fellow who has conducted independent computational neuropsychology research under the supervision of a Yale professor. His work sits at the intersection of AI, applied math, and neuroscience, with a focus on developing computational applications for neurodivergent developmental disorders. A frequent presenter at national research conferences, he also serves on the Workshop and Outreach team for Next Horizon. He is the founder of Les Enfants du Monde, a nonprofit focused on STEM, AI, and entrepreneurship education for youth in the Democratic Republic of the Congo. In his free time, he is an avid tennis and pickleball player and has played violin for six years.",
          image: "/staff/danieledouard.png",
        },
        {
          name: "Charlie Yang",
          role: "Head Mentor",
          bio: "is a three-time AIME qualifier with AMC 10 Distinguished Honor Roll who presents independent research at academic conferences. He plays AAA ice hockey and competes on his school's varsity team.",
          image: "/staff/charles.png",
        },
        {
          name: "Adithya Balakumar",
          role: "Head Mentor",
          bio: "is an AIME qualifier (2026) with a Bronze Medal at the Math League International Competition and a state-level robotics innovation award. He loves exploring local parks and drinking matcha.",
          image: "/staff/adithyabalakumar.png",
        },
        {
          name: "Damayne Anderson",
          role: "Head Mentor",
          bio: "is a driven student-athlete and community member, focused on growth both on and off the court. He is the founder of Daily Math and actively competes in USACO, with a strong interest in qualifying for AIME. Through his involvement in a nonprofit, he works to give back while building leadership, discipline, and a commitment to excellence.",
          image: "/staff/damayneanderson.png",
        },
      ],
      generalStaff: [
        {
          name: "Aarin Patkar",
          bio: "is a competitive speech and debate student who also has a strong passion for mathematics and Spanish. Outside of the classroom, he enjoys exploring new ideas, debating current events, and challenging himself with math problems.",
        },
        {
          name: "Aaron Qin",
          bio: "is a 2x AIME qualifier immersed in startup culture. He is interested in creative problem-solving and how theoretical math concepts intertwine with real-world systems. Outside of math, he enjoys researching, filmmaking, songwriting, and coding.",
          image: "/staff/aaronqin.png",
        },
        {
          name: "Abhiram Jetty",
          bio: "is a USAJMO qualifier, TXSEF finalist, Thermo Fisher finalist, and AMC 10 Distinguished Honor Roll recipient. As a 9th grader, he likes to play video games, swim, and write math problems for contests like YIMO.",
          image: "/staff/abhiramjetty.png",
        },
        {
          name: "Atharv Karamcheti",
          bio: "is a freshman with interests in biomedical engineering, robotics, and chemistry. He competes on a VEX V5 robotics team that recently qualified for Worlds and conducts independent research on biomedical engineering applications. In his free time, he enjoys origami, digital art, photography, and piano.",
          image: "/staff/atharvkaramcheti.png",
        },
        {
          name: "Christopher Huang",
          bio: "serves as the Executive of Education at STEMise, where he leads initiatives to make STEM learning more accessible. As a Senior SAT Tutor at Schoolhouse.world, he has mentored over 65 students across 20 countries and overseen more than 1,200 certifications. Beyond education, he has a personal interest in the intersection of dentistry and materials science.",
          image: "/staff/christopherhuang.png",
        },
        {
          name: "Collin Du",
          bio: "is a national K-12 chess champion with five years of competitive experience who is currently training for ISEF. He played baseball for seven years and enjoys fishing, skiing, and writing.",
          image: "/staff/collindu.png",
        },
        {
          name: "Desmond Chen",
          bio: "has a strong passion for math contests and enjoys writing problems for competitions.",
        },
        {
          name: "Dhagash Desai",
        },
        {
          name: "Eric Guo",
          bio: "is a 2x USA(J)MO Qualifier and current MIT PRIMES researcher at High Technology High School in New Jersey. In his free time, he likes to talk to friends on Discord.",
        },
        {
          name: "Ethan Yang",
          bio: "is an AMC 12 qualifier who enjoys creating applications that help people study more effectively.",
        },
        {
          name: "George Paret",
          bio: "is a 4x AIME qualifier, AMC 10/12 Distinguished Honor Roll recipient, PUMaC Top 10 Geometry, BMT Top 10 Geometry, BMT Top 10 Algebra, HMMT Top 25 Geometry, MATHCOUNTS Nationals Qualifier, ARML Perfect Scorer, and co-founder of GPMO. In his free time, he enjoys playing ping-pong and listening to music.",
        },
        {
          name: "Jacob Rotella Riggers",
          bio: "is a VEX VRC World Championships competitor with strong skills in math, programming, and robotics. He trains seriously for distance running and competes in baseball.",
          image: "/staff/jacobriggers.png",
        },
        {
          name: "Justin Guo",
          bio: "is a 4x AIME qualifier, HMMT top 50 placer, USACHO qualifier, and Olympiad Insider officer. He enjoys chess, running, community service, and programming.",
        },
        {
          name: "Krish Kejriwal",
          bio: "is an aspiring mathematician who has achieved distinctions at MATHCOUNTS chapter rounds and AMC 8. He is currently writing problems for the 2026 YIMO.",
          image: "/staff/krishkejriwal.png",
        },
        {
          name: "Kristen Zhou",
          bio: "is a student who enjoys competition math and teaching it. Despite missing AIME by 1.5 points, she has placed first and fourth at many regional MATHLEAGUE.ORG competitions. She is a four-year cross country runner who has qualified for the Central Coast Section three times. In her free time, she enjoys playing PJSK, watching Danganronpa, and listening to indie music.",
          image: "/staff/kristenzhou.png",
        },
        {
          name: "Lefteris Demosthenous",
          bio: "is an AIME qualifier with distinction and a USACO Silver competitive coder. He likes to play piano and lift weights.",
        },
        {
          name: "Leo Pattison",
          bio: "is a track and soccer athlete passionate about math and coding who volunteers at local workshops to teach and inspire elementary school students.",
          image: "/staff/leopattison.png",
        },
        {
          name: "Nathan Zaltsman",
          bio: "is a Next Horizon alumnus turned mentor who mastered competitive coding through our programs. He is a competitive chess player who stays mentally and physically sharp through regular workouts.",
          image: "/staff/nathanzaltsman.png",
        },
        {
          name: "Pietro Loraschi",
          bio: "is a USACO Silver competitor (2026) preparing for USAPhO via F=ma, and a two-time top placer at the World Scholar's Cup in debate and collaborative writing. He also plays and performs guitar.",
          image: "/staff/pietroloraschi.png",
        },
        {
          name: "Rayoon Kim",
          bio: "is a USAMO qualifier who can be found coordbashing the most diabolical geometry problem. In his free time, he enjoys playing various PvP games, watching Danganronpa, and listening to various indie groups.",
        },
        {
          name: "Senhan Wang",
        },
        {
          name: "Stanley Kem",
          bio: "is a two-time national writing competition placer and captain of a top-10 ECNL soccer team with three regionally recognized artworks. He is actively preparing for hackathons.",
          image: "/staff/stanleykem.png",
        },
        {
          name: "Tashi Satish",
          bio: "is a VEX VRC World Championships qualifier with a strong background in robotics engineering who also competes in club soccer, balancing demanding STEM work with competitive athletics.",
          image: "/staff/tashisatish.png",
        },
        {
          name: "Vidhur Mahajan",
          bio: "is a high schooler with a passion for competition math and a deep interest in energy and energy research.",
        },
        {
          name: "Vivaan Mathur",
          bio: "is a dedicated cross country runner and VEX Robotics competitor who has qualified for VEX Worlds. He loves combining his passion for engineering with the discipline of distance running, and enjoys building, tuning, and competing with his team.",
        },
        {
          name: "Wyatt Choi",
          bio: "is a 1x AIME qualifier with Honor Roll, a Silver medalist in the Korean Math Olympiad (KMO), and a distinction recipient in the British Math Olympiad Round 1. He has placed in the Top 8 Teams at the Caltech Harvey Mudd Competition, Top 10 Individual at the Brown University Math Olympiad, and 3rd at his regional Math Field Competition. He writes olympiad problems for Solvefire and YIMO, and in his free time plays electric guitar and builds robots for VEX Robotics.",
          image: "/staff/wyattchoi.png",
        },
      ],
    }
  },
}
</script>
