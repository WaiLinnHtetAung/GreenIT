<template>
  <div class="contact-us">
    <div class="header">
      <h5>ABOUT</h5>
      <h2>Contact Us</h2>
      <h6>Contact with our team for the more information</h6>
    </div>

    <div class="contact-info">
      <div class="team">
        <h3>BUSINESS DEVELOPMENT TEAM</h3>
        <h5>info@greenitmm.com</h5>
        <span>+95 9 880 441 215</span>
      </div>

      <div class="team">
        <h3>SOLUTION TEAM</h3>
        <h5>solution@greenitmm.com</h5>
        <span>+95 9 880 441 215</span>
      </div>

      <div class="team">
        <h3>FINANCE TEAM</h3>
        <h5>finance@greenitmm.com</h5>
        <span>+95 9 880 441 215</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-us {
  margin-top: 80px;
  padding: 30px 20%;
}

.contact-us .header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.contact-us .header h5 {
  background: #7fb773;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
}

.contact-us .header h2 {
  font-size: 40px;
  margin: 10px auto 2px;
}

.contact-us .header h6 {
  font-size: 17px;
}

.contact-us .contact-info {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.contact-us .contact-info .team {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-us .team h3 {
  font-size: 22px;
  letter-spacing: 1px;
}

.contact-us .team h5 {
  font-size: 21px;
  letter-spacing: 1px;
}

.contact-us .team span {
  font-size: 18px;
  letter-spacing: 1px;
}

@media (max-width: 1600px) {
  .contact-us {
    margin-top: 80px;
    padding: 30px 10%;
  }
}

@media (max-width: 1200px) {
  .contact-us {
    margin-top: 80px;
    padding: 30px 10%;
  }

  .contact-us .header h5 {
    font-size: 13px;
  }

  .contact-us .header h2 {
    font-size: 35px;
  }

  .contact-us .header h6 {
    font-size: 15px;
  }
  .contact-us .team h3 {
    font-size: 18px;
    text-align: center;
  }

  .contact-us .team h5 {
    font-size: 15px;
  }

  .contact-us .team span {
    font-size: 15px;
  }
}

@media (max-width: 930px) {
  .contact-us {
    margin-top: 80px;
    padding: 30px 7%;
  }
  .contact-us .contact-info .team {
    width: 34%;
  }

  .contact-us .team h3 {
    height: 45px;
  }
}

@media (max-width: 650px) {
  .contact-us {
    margin-top: 60px;
    padding: 30px 2%;
  }
  .contact-us .contact-info {
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact-us .contact-info .team {
    width: 48%;
    margin-bottom: 30px;
  }

  .contact-us .header h5 {
    font-size: 12px;
  }

  .contact-us .header h2 {
    font-size: 30px;
  }

  .contact-us .team h3 {
    height: auto;
  }
}

@media (max-width: 500px) {
  .contact-us .contact-info .team {
    width: 90%;
    margin-bottom: 30px;
  }
}
</style>
