<template>
  <div class="content-page">
    <h1>Chapters</h1>
    <p class="page-intro">
      Our chapters focus on providing accessible math and computer science
      education to under-resourced schools.
    </p>

    <section id="where-we-are">
      <h2>Where we are</h2>
      <p>
        Every chapter is run by a student lead who brings our material to their
        own community.
      </p>

      <div class="chapter-stats">
        <div v-for="stat in chapterStats" :key="stat.label" class="chapter-stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>

      <div class="chapter-countries">
        <div v-for="country in chapters" :key="country.country" class="chapter-country">
          <p class="chapter-country-head">
            <span class="chapter-flag" aria-hidden="true">{{ country.flag }}</span>
            <span class="chapter-country-name">{{ country.country }}</span>
            <span class="chapter-count">
              {{ country.locations.length }}
              {{ country.locations.length === 1 ? 'chapter' : 'chapters' }}
            </span>
          </p>
          <ul class="chapter-location-list">
            <li v-for="location in country.locations" :key="location.name">
              <span class="chapter-location-name">{{ location.name }}</span>
              <span class="chapter-lead">{{ location.lead }}</span>
              <a :href="'mailto:' + location.contact">{{ location.contact }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Chapters grouped by country, most chapters first. Generated from the
         chapter tracker; `continent` only drives the continent count in the
         stats row. */
      chapters: [
        {
          country: 'United States', flag: '🇺🇸', continent: 'North America',
          locations: [
            { name: 'Alpharetta', lead: 'Lakshiet Dasari', contact: 'lakshietdasari@gmail.com' },
            { name: 'Brentwood', lead: 'Shiping Shan', contact: 'shanshiping@gmail.com' },
            { name: 'Charlotte', lead: 'Daniel Dimitrov', contact: 'dansdim10@gmail.com' },
            { name: 'Germantown', lead: 'Prince Wang', contact: 'princezixuanwang@gmail.com' },
            { name: 'Houston', lead: 'Aaron Qin', contact: 'whsmathhonor@gmail.com' },
            { name: 'Ithaca', lead: 'Benjamin You', contact: 'bennyyou716@gmail.com' },
            { name: 'Memphis', lead: 'Shay Mukatira', contact: 'mukatirashay@gmail.com' },
            { name: 'Mountain House', lead: 'Shrikoustubh Veldanda', contact: '1074656@lammersvilleusd.net' },
            { name: 'Rochester', lead: 'Bhuvan Tej Nadakuditi', contact: 'bhuvantej.nadakuditi@gmail.com' },
            { name: 'Saint Peters', lead: 'Arnav Gupta', contact: 'arnav.gupta2806@gmail.com' },
            { name: 'Sammamish', lead: 'Utkarsh Tewari', contact: 'utkarsh.tewari@hotmail.com' },
            { name: 'San Ramon A', lead: 'Ashwika Nukala', contact: 'ashwikanukala18@gmail.com' },
            { name: 'San Ramon K', lead: 'Kaushik Atla', contact: 'kaushik.atla@gmail.com' },
            { name: 'Silver Spring', lead: 'James Wang', contact: 'james.wang3.14159@gmail.com' },
            { name: 'South Pasadena', lead: 'Ziqi Yao', contact: 'ziqiyao18@gmail.com' },
            { name: 'Tampa', lead: 'Nathalie Martin', contact: 'nathaliemartinpujol22@gmail.com' },
          ],
        },
        {
          country: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia',
          locations: [
            { name: 'Andijan', lead: 'Shaxnoza Komilova', contact: 'shaxnozakomilova2222@gmail.com' },
            { name: 'Gulistan', lead: 'Bunyod Ro\'ziqulov', contact: 'bunyodroziqulov0506@gmail.com' },
            { name: 'Jizzakh', lead: 'Abduraimova Sabina', contact: 'sabinaabduraimova555@gmail.com' },
            { name: 'Karshi', lead: 'Ro\'ziboyeva Joziba Jonibekovna', contact: 'joziba.ruzibaeva777@gmail.com' },
            { name: 'Kasbi', lead: 'Hayotbek Tohirov', contact: 'hayotbektohirov0@gmail.com' },
            { name: 'Nurota', lead: 'Odina Ochilova', contact: 'ochilovaodina35@gmail.com' },
            { name: 'Samarkand', lead: 'Vasliddin Tuychiyev', contact: 'acemind10@gmail.com' },
            { name: 'Sherobod', lead: 'E\'zoza Mamatmusayeva', contact: 'mamatmusayevae@gmail.com' },
            { name: 'Tashkent A', lead: 'Abdulaziz Safarov', contact: 'abdulazizsfrv3000@gmail.com' },
            { name: 'Tashkent B', lead: 'Bakayeva Zilola', contact: 'bakaevazilola24@gmail.com' },
            { name: 'Tashkent H', lead: 'Hadicha Kozimjonova', contact: 'hadichak338@gmail.com' },
            { name: 'Tashkent K', lead: 'Khusanjon Nosirov', contact: 'husanboynosirov545@gmail.com' },
            { name: 'Tashkent ZR', lead: 'Zubayr Rashidov', contact: 'zubayrrashidov22@gmail.com' },
            { name: 'Tashkent ZV', lead: 'Zarina Vakhabova', contact: 'vakhabova25@gmail.com' },
            { name: 'Uzbekistan L', lead: 'Lazizjon Ibratov', contact: 'lazizjonibratov@gmail.com' },
            { name: 'Uzbekistan S', lead: 'Shermuhammadhuja Temirov', contact: 'Shermuhammad.temirov5@gmail.com' },
          ],
        },
        {
          country: 'Kazakhstan', flag: '🇰🇿', continent: 'Asia',
          locations: [
            { name: 'Almaty A', lead: 'Aissara', contact: 'aissarazk@gmail.com' },
            { name: 'Almaty AA', lead: 'Ali Atey', contact: 'Klara.serikkali@gmail.com' },
            { name: 'Almaty B', lead: 'Baratova Yasmina', contact: 'baratovaasmina47@gmail.com' },
            { name: 'Almaty K', lead: 'Kydyrbek Kozykorpesh', contact: 'koutlikefrvr4@gmail.com' },
            { name: 'Almaty N', lead: 'Nurash Yasmin', contact: 'yasyalug@mail.ru' },
            { name: 'Astana D', lead: 'Demessinov Alzhan', contact: 'alzhan.demesinov@gmail.com' },
            { name: 'Astana S', lead: 'Salimbek Akzhan', contact: 'akzansalimbek796@gmail.com' },
            { name: 'Atyrau', lead: 'Marat Ali', contact: 'alimarat177@gmail.com' },
            { name: 'Karagandy', lead: 'Nyshan Darina Aitzhankyzy', contact: 'darii.2024.a@gmail.com' },
            { name: 'Kazakhstan', lead: 'Murat Imangali', contact: 'aimanchik.86@gmail.com' },
            { name: 'Kokshetau', lead: 'Kairbek Medina Abaiqyzy', contact: 'medina.abayqyzy@mail.ru' },
            { name: 'Oskemen', lead: 'Yessirkep Zere', contact: 'zeresha.e.n.09@gmail.com' },
            { name: 'Uralsk A', lead: 'Arsen Kanapiya', contact: 'kanapiaarsen129@gmail.com' },
            { name: 'Uralsk I', lead: 'Ismukhanov Kairat', contact: 'ismukhanovkairat@gmail.com' },
          ],
        },
        {
          country: 'Egypt', flag: '🇪🇬', continent: 'Africa',
          locations: [
            { name: '10th of Ramadan', lead: 'Nouran Ehab Mohamed Ahmed', contact: 'nour0hony@gmail.com' },
            { name: 'Alexandria', lead: 'Youssef Moustafa Afifi', contact: 'youssef2010.moustafa@gmail.com' },
            { name: 'Cairo M', lead: 'Mamdouh Samer Mohammed Fared', contact: 'mmdohsamir91@gmail.com' },
            { name: 'Cairo S', lead: 'Salma Mohamed Elhady', contact: 'salmamohamedelhady@gmail.com' },
            { name: 'Egypt SO', lead: 'Sondos Moustafa Oraby', contact: 'sondosmoustafaoraby@gmail.com' },
            { name: 'Egypt SR', lead: 'Salma Mohammed Reda', contact: 'salmamohamedreda4@gmail.com' },
            { name: 'Giza', lead: 'Abdullah Ahmed Abd El-Sameea Hussien Mohamed', contact: 'omccomunity5@gmail.com' },
            { name: 'Menoufia', lead: 'Jouner Sameh Rezkalla Ebrahim', contact: 'jounersameh1@gmail.com' },
            { name: 'Minya', lead: 'Mira Moheb Farouk Kamel', contact: 'nadamark674@gmail.com' },
            { name: 'Qalyubia A', lead: 'Ahmed Ayman Ahmed', contact: 'a18980123@gmail.com' },
            { name: 'Qalyubia K', lead: 'Kareem Mohamed Said Mohamed', contact: 'km667528@gmail.com' },
            { name: 'Talkha', lead: 'Ibrahim Hamdi Rizk Elsayed', contact: 'ibrahim.hamdi.rizk@gmail.com' },
          ],
        },
        {
          country: 'Pakistan', flag: '🇵🇰', continent: 'Asia',
          locations: [
            { name: 'Faisalabad', lead: 'Muhammad Sumama Nadeem', contact: 'sumama138c@gmail.com' },
            { name: 'Gujranwala Cantt', lead: 'Abdullah Zahid Chehal', contact: 'abdullahahmad7869@gmail.com' },
            { name: 'Islamabad AA', lead: 'Ahmed Mustafa Ashfaq', contact: 'ahmedmustafaashfaq125@gmail.com' },
            { name: 'Islamabad AS', lead: 'Areeha Shahzad', contact: 'dr.nidaamin@gmail.com' },
            { name: 'Islamabad AT', lead: 'Alizah Tariq', contact: 'alizahhtariq@gmail.com' },
            { name: 'Islamabad MF', lead: 'Mahrukh Fatimah', contact: 'mahrukh.fm1@gmail.com' },
            { name: 'Islamabad MK', lead: 'Maryam Tariq Khattak', contact: 'mtkhattak13@gmail.com' },
            { name: 'Islamabad S', lead: 'Syed Aun Hussain', contact: 'syedauonhussain121@gmail.com' },
            { name: 'Karachi', lead: 'Tayyaba Batool', contact: 'Tayyabaabatooll@gmail.com' },
            { name: 'Lahore MM', lead: 'Muhammad Arham Mukhtar', contact: 'mhodarham3@gmail.com' },
            { name: 'Lahore MN', lead: 'Muhammad Taha Naumaan', contact: 'muhammadtahanaumaan@gmail.com' },
            { name: 'Lahore U', lead: 'Umar Usman', contact: 'umarusman78609@gmail.com' },
          ],
        },
        {
          country: 'Ethiopia', flag: '🇪🇹', continent: 'Africa',
          locations: [
            { name: 'Addis Ababa A', lead: 'Aklilemariam Wondimneh', contact: 'aklilemariam923@gmail.com' },
            { name: 'Addis Ababa E', lead: 'Elbethel Shibru', contact: 'elbetheladmasu316@gmail.com' },
            { name: 'Addis Ababa F', lead: 'Fikir Getnet', contact: 'fikirgetnet123@gmail.com' },
            { name: 'Arba Minch E', lead: 'Eyuel Admasu Mamo', contact: 'eyueladmasu720@gmail.com' },
            { name: 'Arba Minch H', lead: 'Hedase Melkamu', contact: 'hideege@gmail.com' },
            { name: 'Bahir Dar', lead: 'Maereg Kifle', contact: 'kiflemaereg08@gmail.com' },
            { name: 'Hawassa', lead: 'Selam Zenbaba', contact: 'selamzenbaba178@gmail.com' },
          ],
        },
        {
          country: 'India', flag: '🇮🇳', continent: 'Asia',
          locations: [
            { name: 'Bhusawal', lead: 'Niranjan Barhate', contact: 'niranjanbarhate64@gmail.com' },
            { name: 'Delhi', lead: 'Krishiv Gupta', contact: 'krishiv306150018@genesisgs.edu.in' },
            { name: 'Faridabad', lead: 'Aayat Salam', contact: 'a02340527@gmail.com' },
            { name: 'India', lead: 'Sunidhi M', contact: 'sunidhi.mungila2@gmail.com' },
            { name: 'Kolkata', lead: 'Pauravi Nandy', contact: 'pauravi.nandy@gmail.com' },
            { name: 'Lucknow', lead: 'Shashwat Singh', contact: 'singhshashwat0703@gmail.com' },
            { name: 'Ludhiana', lead: 'Harguneet Singh', contact: 'singhharguneet5@gmail.com' },
          ],
        },
        {
          country: 'Bangladesh', flag: '🇧🇩', continent: 'Asia',
          locations: [
            { name: 'Bangladesh', lead: 'Nitu Akter', contact: 'nafisanitu240@gmail.com' },
            { name: 'Dhaka M', lead: 'Mostafa Afnan Nafiz', contact: 'mostafaafnannafiz@gmail.com' },
            { name: 'Dhaka S', lead: 'Samama Siddique', contact: 'samamasiddique7@gmail.com' },
          ],
        },
        {
          country: 'Myanmar', flag: '🇲🇲', continent: 'Asia',
          locations: [
            { name: 'Yangon H', lead: 'Htet Thiri Win', contact: 'yagonmathsclub@gmail.com' },
            { name: 'Yangon S', lead: 'Swan Htet Naing (Marc)', contact: 'swanhtetnaing932110@gmail.com' },
            { name: 'Yangon T', lead: 'Tin Win Oo', contact: 'cyrusindra79@gmail.com' },
          ],
        },
        {
          country: 'Angola', flag: '🇦🇴', continent: 'Africa',
          locations: [
            { name: 'Angola', lead: 'David Mambo Macosso', contact: 'macossotodilson@gmail.com' },
            { name: 'Luanda', lead: 'Daniel Paulo Char Francisco', contact: 'chardaniel.com@gmail.com' },
          ],
        },
        {
          country: 'Malaysia', flag: '🇲🇾', continent: 'Asia',
          locations: [
            { name: 'Kuala Lumpur', lead: 'Yawen Duan', contact: 'yawenduan09@gmail.com' },
            { name: 'Subang Jaya', lead: 'Mammetmyrat Durdymammedov', contact: 'mammetmyrat88@gmail.com' },
          ],
        },
        {
          country: 'Mexico', flag: '🇲🇽', continent: 'North America',
          locations: [
            { name: 'Mexico', lead: 'Norma Paola Ortiz Magana', contact: 'a01804240@tec.mx' },
            { name: 'Monterrey', lead: 'Ernesto Gadhiel Rodriguez Gallegos', contact: 'rernestogadhiel@gmail.com' },
          ],
        },
        {
          country: 'Russia', flag: '🇷🇺', continent: 'Europe',
          locations: [
            { name: 'Moscow A', lead: 'Arseniy Berezin', contact: 'aescmsu.yimochapter@gmail.com' },
            { name: 'Moscow L', lead: 'Lev Dzhergeniia', contact: 'levdzhergeniya@gmail.com' },
          ],
        },
        {
          country: 'United Arab Emirates', flag: '🇦🇪', continent: 'Asia',
          locations: [
            { name: 'Dubai M', lead: 'Muhammad Ammar', contact: 'zainammar571@gmail.com' },
            { name: 'Dubai S', lead: 'Shaivi Shah', contact: 'shaivishah2028@gmail.com' },
          ],
        },
        {
          country: 'Afghanistan', flag: '🇦🇫', continent: 'Asia',
          locations: [
            { name: 'Kabul', lead: 'Nasratullah Yousufzai', contact: 'nasratullahyousufzai554@gmail.com' },
          ],
        },
        {
          country: 'Algeria', flag: '🇩🇿', continent: 'Africa',
          locations: [
            { name: 'Constantine', lead: 'Mayar Lecheheb', contact: 'mimimayar9023@gmail.com' },
          ],
        },
        {
          country: 'Canada', flag: '🇨🇦', continent: 'North America',
          locations: [
            { name: 'Canada', lead: 'Rajmika Rakshit', contact: 'rajmika.rakshit@gmail.com' },
          ],
        },
        {
          country: 'Chile', flag: '🇨🇱', continent: 'South America',
          locations: [
            { name: 'Chile', lead: 'Agustin Ruben Galvez Berrios', contact: 'galvezberriosagustin@gmail.com' },
          ],
        },
        {
          country: 'China', flag: '🇨🇳', continent: 'Asia',
          locations: [
            { name: 'Hong Kong', lead: 'Zion Jun Wong Ng', contact: 'zion.jw.ng@gmail.com' },
          ],
        },
        {
          country: 'Indonesia', flag: '🇮🇩', continent: 'Asia',
          locations: [
            { name: 'Yogyakarta', lead: 'Bimo Fakhrul Amrullah', contact: 'bimo.amrullah@gdajogja.sch.id' },
          ],
        },
        {
          country: 'Iraq', flag: '🇮🇶', continent: 'Asia',
          locations: [
            { name: 'Anbar', lead: 'Aisha Walid Hussein', contact: 'aisha.w.huissein@gmail.com' },
          ],
        },
        {
          country: 'Japan', flag: '🇯🇵', continent: 'Asia',
          locations: [
            { name: 'Tokyo', lead: 'Aarnav Jayant Sawant', contact: 'aarnavsawa09@gmail.com' },
          ],
        },
        {
          country: 'Kyrgyzstan', flag: '🇰🇬', continent: 'Asia',
          locations: [
            { name: 'Kyrgyzstan', lead: 'Svetlana', contact: 'saku052788@gmail.com' },
          ],
        },
        {
          country: 'Lebanon', flag: '🇱🇧', continent: 'Asia',
          locations: [
            { name: 'Mazraat Yachou', lead: 'Elie Joe Egho', contact: 'eliejoeegho@hotmail.com' },
          ],
        },
        {
          country: 'Mauritius', flag: '🇲🇺', continent: 'Africa',
          locations: [
            { name: 'Roches Noires', lead: 'Ladimira Butskevich', contact: 'lenovalada@gmail.com' },
          ],
        },
        {
          country: 'Mongolia', flag: '🇲🇳', continent: 'Asia',
          locations: [
            { name: 'Ulaanbaatar', lead: 'Chinbuyan Tuvshintur', contact: 'chinbuyan511@gmail.com' },
          ],
        },
        {
          country: 'Morocco', flag: '🇲🇦', continent: 'Africa',
          locations: [
            { name: 'Casablanca', lead: 'Malak Ifguiss', contact: 'ifguissmalak@gmail.com' },
          ],
        },
        {
          country: 'Nepal', flag: '🇳🇵', continent: 'Asia',
          locations: [
            { name: 'Kathmandu', lead: 'Ira Kc', contact: 'ira.2087@gems.edu.np' },
          ],
        },
        {
          country: 'Romania', flag: '🇷🇴', continent: 'Europe',
          locations: [
            { name: 'Turnu Magurele', lead: 'Maria-Alexandra Odaianu', contact: 'alexandraodaianu06@gmail.com' },
          ],
        },
        {
          country: 'Rwanda', flag: '🇷🇼', continent: 'Africa',
          locations: [
            { name: 'Kigali', lead: 'Abijuru Brise Guannaelle', contact: 'guannaellebrise@gmail.com' },
          ],
        },
        {
          country: 'Serbia', flag: '🇷🇸', continent: 'Europe',
          locations: [
            { name: 'Novi Sad', lead: 'Kirill Reviakin', contact: 'kirill.reviakin.s@gmail.com' },
          ],
        },
        {
          country: 'South Africa', flag: '🇿🇦', continent: 'Africa',
          locations: [
            { name: 'Durban', lead: 'Sanele Tshwala', contact: 'tshwalasanele38@gmail.com' },
          ],
        },
        {
          country: 'United Kingdom', flag: '🇬🇧', continent: 'Europe',
          locations: [
            { name: 'Belfast', lead: 'Daniel Canning', contact: 'daniel.canning401@icloud.com' },
          ],
        },
        {
          country: 'Vietnam', flag: '🇻🇳', continent: 'Asia',
          locations: [
            { name: 'Ho Chi Minh City', lead: 'Nguyen Dinh Trong Khang', contact: 'nguyendinhtrongkhang2212@gmail.com' },
          ],
        },
      ],
    }
  },
  computed: {
    /* Counted from the list above so the headline numbers cannot drift out of
       step with the chapters actually shown. */
    chapterStats() {
      return [
        { value: this.chapters.reduce((n, c) => n + c.locations.length, 0), label: 'Chapters' },
        { value: this.chapters.length, label: 'Countries' },
        { value: new Set(this.chapters.map((c) => c.continent)).size, label: 'Continents' },
      ]
    },
  },
  head() {
    return {
      title: 'YIMO Chapters',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'YIMO chapters bringing math and computer science education to under-resourced schools worldwide.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.chapter-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin: 1.75rem 0 2.25rem;
}

.chapter-stat {
  padding: 1.1rem 1.25rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  text-align: center;
}

.chapter-stat strong {
  display: block;
  color: var(--text);
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  font-weight: 900;
  line-height: 1;
}

.chapter-stat span {
  display: block;
  margin-top: 0.4rem;
  color: var(--accent-soft);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.chapter-countries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.chapter-country {
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}

.chapter-country-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 0.9rem;
}

.chapter-flag {
  font-size: 1.35rem;
  line-height: 1;
}

.chapter-country-name {
  color: var(--text);
  font-weight: 800;
}

.chapter-count {
  color: var(--text-faint);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.chapter-location-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}

.chapter-location-list li {
  display: grid;
  gap: 0.15rem;
}

.chapter-location-name {
  color: var(--text);
  font-weight: 700;
  font-size: 0.92rem;
}

.chapter-lead {
  color: var(--text-dim);
  font-size: 0.82rem;
}

.chapter-location-list a {
  color: var(--accent-soft);
  font-size: 0.78rem;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.chapter-location-list a:hover {
  text-decoration: underline;
}
</style>
