<template>
 <section class="bg_custom2 text-center p-5 ">
  <div class="introduction  px-5 mx-5">
   <h2 class="fw-bold display-5">Live Dates</h2>
   <div class="m-4">
    <hr class="w-25 m-auto" />
   </div>

   <p class="px-5 mx-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quae? Saepe
    itaque nobis placeat, temporibus beatae fuga voluptates eligendi quam odio
    distinctio magnam facere debitis veniam. Dolore similique repellat
    reprehenderit!
   </p>
  </div>

  <!-- Lista eventi dinamica -->
  <ul class="events-list ">
   <li
    v-for="(event, index) in nextEvents"
    @click="openEvent(index)"
    :key="index"
    :class="event.active ? 'active' : ''"
   >
    <h2>
     <span v-if="event.active" >-</span>
     <span v-else>+</span>
     {{ event.date }} {{ event.name }} {{ event.location }}
    </h2>
    <div class="map d-flex justify-content-between" v-if="event.active">
     <iframe
      :src="event.src"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
     ></iframe>

     <div>
      <h3>
       {{ event.title }}
      </h3>
      <p>
       {{ event.description }}
      </p>
      <a class="btn bg_button px-3 py-2 btn-sm" href="#" role="button"
       >BOOK NOW
      </a>
     </div>
    </div>
   </li>
  </ul>
 </section>
</template>

<script>
export default {
 name: "FifthMainSection",

 data: function () {
  return {
   nextEvents: [
    {
     name: "GEM FESTIVAL 2020",
     location: "ANAKALIA, GEORGIA",
     date: "17/08/2020",
     src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11785.423455974298!2d41.57977553594036!3d42.398866630256684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405dd3503d5ccb83%3A0xe6594e70d69782bc!2sAnaklia%2C%20Georgia!5e0!3m2!1sit!2sit!4v1652614231137!5m2!1sit!2sit',
     title: "Untold Stories",
     description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio, harum explicabo aliquam modi enim repellendus doloribus fuga ",
     active: false,
    },
    {
     name: "GROOVEFEST",
     location: "DOMINICAN REPUBLIC",
     date: "24/09/2020",
     src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483230.81125896535!2d-70.38144414510484!3d18.876399511263816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sRepubblica%20Dominicana!5e0!3m2!1sit!2sit!4v1652614428615!5m2!1sit!2sit',
     title: "Untold Stories",
     description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio, harum explicabo aliquam modi enim repellendus doloribus fuga ",
     active: false,
    },
    {
     name: "OASIS FESTIVAL 2020",
     location: "MARRAKECH, MAROCCO",
     date: "31/10/2020",
     src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.95032917536!2d-8.07789409864225!3d31.634748492871406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Marocco!5e0!3m2!1sit!2sit!4v1652614483320!5m2!1sit!2sit',
     title: "Untold Stories",
     description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio, harum explicabo aliquam modi enim repellendus doloribus fuga ",
     active: false,
    },
    {
     name: "MOGA FESTIVAL -",
     location: "ESSAOURIA, MAROCCO",
     date: "07/11/2020",
     src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27211.838586151094!2d-9.780051807826258!3d31.510978945291434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sProvincia%20di%20Essaouira%2C%20Marocco!5e0!3m2!1sit!2sit!4v1652614516407!5m2!1sit!2sit',
     title: "Untold Stories",
     description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio, harum explicabo aliquam modi enim repellendus doloribus fuga ",
     active: false,
    },
    {
     name: "ENVISION FESTIVAL -",
     location: "UVITA, COSTA RICA",
     date: "10/12/2020",
     src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.211376915428!2d-83.75556013335746!3d9.163364997576823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa15797d4474891%3A0x39ea10029c9e9f27!2sProvincia%20di%20Puntarenas%2C%20Uvita%2C%20Costa%20Rica!5e0!3m2!1sit!2sit!4v1652614541583!5m2!1sit!2sit',
     title: "Untold Stories",
     description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio, harum explicabo aliquam modi enim repellendus doloribus fuga ",
     active: false,
    },
   ],
  };
 },
 methods: {
  // Funzione apertura paragrafo evento
  openEvent: function (index) {
   // Se l'evento aperto è uguale a sè stesso lo chiudo
   if (this.nextEvents[index].active == true) {
    this.nextEvents[index].active = false;
   }
   // Altrimenti se non è gia aperto chiudo gli altri e apro l'evento cliccato
   else {
    this.nextEvents.forEach((element) => {
     element.active = false;
    });
    this.nextEvents[index].active = true;
   }

  },
 },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commons.scss";
// Sezione lista eventi
.introduction {
 p {
  color: $textSecondaryColor;
 }
}
.events-list {
 flex-basis: 80%;
 margin-top: 50px;
 li {
  height: 60px;
  margin: 10px 0;
  padding: 15px 25px;
  text-align: left;
  color: white;
  background-color: $secondaryBgColor;
  cursor: pointer;
  transition: height 0.4s;
  overflow: hidden;
  &.active {
   height: 330px;
  }

  h2 {
   color: $textColor;
   font-size: 17px;
   letter-spacing: 2px;
   font-weight: 400;
   span {
    font-weight: 600;
    display: inline-block;
    padding: 5px 10px;
    margin-right: 10px;
    color: white;
    transition: background-color 0.3s;
   }
  }
  &:hover {
   background-color: #373d4a;
  }
  &:hover span {
   background-color: $textColor;
  }

  // Sezione a comparsa con mappa e descrizione evento
  .map {
   flex-wrap: wrap;
   margin-top: 30px;

   // Mappa Google Maps
   iframe {
    width: 320px;
    height: 240px;
    margin-right: 50px;
   }

   // Sezione con descrizione
   div {
    flex-basis: calc(100% - 370px);
    margin-top: 10px;
    h3 {
     font-size: 17px;
     font-weight: 400;
     letter-spacing: 2px;
     color: white;
    }
    p {
     color: $textSecondaryColor;
     margin: 30px 0;
     font-size: 15px;
     line-height: 32px;
    }
   }
  }
 }
}
</style>

