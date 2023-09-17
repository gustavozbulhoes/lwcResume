# Resume LWC Example

This repository contains the source code for [my resume page](https://gustavozbulhoes-dev-ed.my.site.com/resume/). The resumeContainer is the component that needs to be published using a Salesforce Digital Experience Site.

# Create your resume in your environment from mine

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. Clone the repository:

    ```
    git clone https://github.com/gustavozbulhoes/lwcResume.git
    cd lwcResume
    ```

1. Push the Object, Fields, LWC Components and Apex controller used by the resume page:

    ```
    sf project deploy start
    ```

1. Create a public page exposing the component

    - In Setup, under Digital Experiences Settings, Enable Digital Experiences.
    - In Setup, under Digital Experiences, create a new site under All Sites.
    - Select Build Your Own (Aura) template and create it
    - Under Builder drag and drop the resumeContainer to the page
    - Under settings, select Guest users can see and interact with the site without logging in and publish the page.