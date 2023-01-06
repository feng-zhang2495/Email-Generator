const button = document.getElementById("generateButton");



button.addEventListener("click", () => {
    const name = document.getElementById("yourName").value;
    const companyName = document.getElementById("companyName").value;
    const valueProposition1 = document.getElementById("valueProposition1");
    const valueProposition2 = document.getElementById("valueProposition2");
    const valueProposition3 = document.getElementById("valueProposition3");
    
    var text = "";
    
    if(valueProposition1.checked == true) {
        text = "Given " + companyName + "’s deep involvement in the tech industry, we believe that JAMHacks would be a great opportunity for you to connect with some of the brightest minds in Canada and the tech workers of the future. By becoming a sponsor, you'll get access to invaluable recruitment opportunities that will reach a pool of the most talented students in engineering, software, and business - including their resumes"
    }

    if(valueProposition2.checked == true) {
        text = "By becoming a sponsor, you’ll have the special opportunity to make an early impression on young computer scientists, engineers, and the leaders of tomorrow. There are many promotional opportunities for " + companyName + " including hosting a booth, being acknowledged during opening/closing ceremonies, and much more"
    }

    if(valueProposition3.checked == true) {
        text = "By becoming a sponsor, you’ll have the opportunity to advertise [COMPANY PRODUCT/SERVICE] to our group of aspiring [GROUP] developers. We’d also love to provide [PRODUCT/SERVICE] as winner prizes if you are interested in offering a non-monetary sponsorship"
    }
    
    var jamhacks = "JAMHacks 7"
    jamhacks = jamhacks.link('jamhacks.ca')

    var email = "Hello! <br><br>My name is " + name + " - I’m reaching out from the " + jamhacks + " team. We’re hosting our annual high school hackathon for May 2023, and I’m contacting you to explore sponsorship opportunities with " + companyName +". <br><br>A bit about JAMHacks: JAMHacks was established in 2017 as Waterloo’s first-ever high school hackathon with a vision of helping students reach their full potential. As of 2022, we are Canada’s largest high school hackathon and receive over 400 hacker registrations each year. Hosted in “Canada’s Silicon Valley”, JAMHacks gathers Canada’s future engineers, graphic designers, and computer scientists to push the limits of their creativity and create innovative solutions with technology. <br><br>JAMHacks relies heavily on the support of its community and our events wouldn’t be possible without the generous support of our sponsors. " + text + ". We have attached our prospectus to this email, but we’d be more than happy to customize our sponsorship plans to work with you! <br><br>As a next step, I’d love to set up a call with you within the next few weeks to go over our prospectus, learn more about how we can meet " + companyName + "'s needs, and discuss any further details. I'll be available to call Monday through Thursday from 3-5pm. Alternatively, I can send you further information over email. Looking forward to hearing from you! <br><br>Thanks, <br>" + name;
    var subjectLine = "<b>SUBJECT LINE:</b> " + companyName + " + JAMHacks: Hackathon Sponsorship Opportunity"
    document.getElementById("output").innerHTML = `${subjectLine} <br><br> ${email}`;
})