class MetarSpeciReport {

  constructor(formElement) {

    this.form = formElement
    this.output = this.form.elements['output']

    this.report = {
      type: this.getType(),
      icao: this.getICAO(),
    }
    this.updateOutput()

    for (const element of this.form.elements['type']) {
      element.addEventListener('change', (e) => {
        this.report.type = this.getType()
        this.updateOutput()
      })
    }

    this.form.elements['icao'].addEventListener('input', (e) => {
      e.target.value = e.target.value.toUpperCase()
      this.report.icao = this.getICAO()
      this.updateOutput()
    })
  }

  getType() {
    return this.form.querySelector(
      'input[type="radio"][name="type"]:checked')
        .value.toUpperCase()
  }

  getICAO() {
    return this.form.elements['icao'].value
  }

  updateOutput() {
    const output = `${ this.report.type } ${ this.report.icao }`
    this.output.value = output
  }

}

const report = new MetarSpeciReport(document.forms['mform'])
