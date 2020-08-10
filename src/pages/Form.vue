<template>
  <b-steps
    v-model="activeStep"
  >
    <b-step-item label="Installation" icon="npm">
      <ul>
        <li> Install gridsome by running <i> npm install -g gridsome </i> </li>
        <li> Then clone this repo by running <i> git clone https://github.com/FriendlyUser/gridsome-starter-buefy.git</i> </li>
      </ul>
    </b-step-item>
    <b-step-item label="Configuration" icon="web">
      <ul>
        <li> Update <i>gridsome.config.js</i> with unique site name and hosting details. </li>
        <li> Change formspree to use your personal email address. </li>
      </ul>
    </b-step-item>
    <b-step-item label="Deployment" icon="azure">
      Deployment can be handled using azure pipelines, additionally considering adding more customization.
    </b-step-item>
  </b-steps>  
</template>
