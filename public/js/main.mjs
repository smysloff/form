class MetarSpeciReport {

  constructor(formElement) {

    this.form = formElement
    this.output = this.form.elements['output']
    this.report = {}

    this.updateType()
    this.updateICAO()
    this.updateDate()
    this.updateTime()

    for (const element of this.form.elements['type']) {
      element.addEventListener('change', () => this.updateType())
    }

    this.form.elements['icao']
      .addEventListener('input', () => this.updateICAO())

    this.form.elements['date']
      .addEventListener('input', () => this.updateDate())

    this.form.elements['time']
      .addEventListener('input', () => this.updateTime())
  }


  updateType() {
    const element = this.form.querySelector(
      'input[type="radio"][name="type"]:checked')
    this.updateReport('type', element.value.toUpperCase() ?? '')
  }

  updateICAO() {
    const element = this.form.elements['icao']
    element.value = element.value.toUpperCase()
    this.updateReport('icao', element.value ?? '')
  }

  updateDate() {
    const element = this.form.elements['date']
    element.value = element.value.replace(/[^\d\.]/g, '')
    this.updateReport('date', element.value.split('.')[0] ?? '')
  }

  updateTime() {
    const element = this.form.elements['time']
    element.value = element.value.replaceAll(/[^\d\:]/g, '')
    const parts = element.value.split(':')
    this.updateReport('time', `${ parts[0] ?? '' }${ parts[1] ?? '' }`)
  }

  updateReport(key, value) {
    this.report[key] = value ?? ''
    const output = ''
            + this.report.type
      + ' ' + this.report.icao
      + ' ' + (this.report.date && this.report.time ? this.report.date + (this.report.time + 'Z') : '')
      + ''
    this.output.value = output
  }

}

const report = new MetarSpeciReport(document.forms['mform'])
