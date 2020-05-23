module.exports = {
  age: function age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1
    }

    return age
  },
  graduation: function graduation(school) {
    if (school === 'medio') {
      return "Ensino Médio Completo"
    }

    else if (school === 'superior') {
      return "Ensino Superior Completo"
    }

    else if (school === 'mestrado') {
      return "Mestrado"
    }

    else if (school === 'doutorado') {
      return "Doutorado"
    }

    if (school === 'Ensino Médio Completo') {
      return "Ensino Médio Completo"
    }

    else if (school === 'Ensino Superior Completo') {
      return "Ensino Superior Completo"
    }

    else if (school === 'Mestrado') {
      return "Mestrado"
    }

    else if (school === 'Doutorado') {
      return "Doutorado"
    }

  },
  grade: function grade(schoolYear) {
    if (schoolYear === '5.EF') {
      return "5º ano do ensino fundamental"
    }

    else if (schoolYear === '6.EF') {
      return "6º ano do ensino fundamental"
    }

    else if (schoolYear === '7.EF') {
      return "7º ano do ensino fundamental"
    }

    else if (schoolYear === '8.EF') {
      return "8º ano do ensino fundamental"
    }

    else if (schoolYear === '9.EF') {
      return "9º ano do ensino fundamental"
    }

    else if (schoolYear === '1.EM') {
      return "1º ano do ensino médio"
    }

    else if (schoolYear === '2.EM') {
      return "2º ano do ensino médio"
    }

    else if (schoolYear === '3.EM') {
      return "3º ano do ensino médio"
    }

    if (schoolYear === '5º ano do ensino fundamental') {
      return "5º ano do ensino fundamental"
    }

    else if (schoolYear === '6º ano do ensino fundamental') {
      return "6º ano do ensino fundamental"
    }

    else if (schoolYear === '7º ano do ensino fundamental') {
      return "7º ano do ensino fundamental"
    }

    else if (schoolYear === '8º ano do ensino fundamental') {
      return "8º ano do ensino fundamental"
    }

    else if (schoolYear === '9º ano do ensino fundamental') {
      return "9º ano do ensino fundamental"
    }

    else if (schoolYear === '1º ano do ensino médio') {
      return "1º ano do ensino médio"
    }

    else if (schoolYear === '2º ano do ensino médio') {
      return "2º ano do ensino médio"
    }

    else if (schoolYear === '3º ano do ensino médio') {
      return "3º ano do ensino médio"
    }
  
  },
  date: function(timestamp) {
    const date = new Date(timestamp)
  
    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)
  
    return {
      day, month, year,
      iso: `${year}-${month}-${day}`,
      birthDate: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    }
  }
}