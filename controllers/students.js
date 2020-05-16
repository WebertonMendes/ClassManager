const fs = require('fs')
const data = require('../data.json')
const { date, grade } = require ('../utils')

exports.index = function(req, res) {
  //schoolYear: grade(foundStudents.schoolYear)
  return res.render("students/index", { students: data.students })
}

exports.create = function(req, res) {
  return res.render("students/create")
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if(req.body[key] == ""){
      return res.send("Please, fill all the fields!")
    }
  }

  date_birth = Date.parse(req.body.date_birth)

  let id = 1
  const lastStudent = data.students[data.students.length -1]

  if(lastStudent) {
    id = lastStudent.id + 1
  }

  data.students.push({
    id,
    ...req.body
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send("Write file error")

    return res.redirect("/students")
  })

}

exports.show = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(student) {
    return student.id == id
  })

  if(!foundStudent) {
    return res.send("Student Not Found!")
  }

  const student = {
    ...foundStudent,
    date_birth: date(foundStudent.date_birth).birthDate,
    schoolYear: grade(foundStudent.schoolYear)
  }

  return res.render("students/show", { student })
}

exports.edit = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(student) {
    return student.id == id
  })

  if(!foundStudent) {
    return res.send("Student Not Found!")
  }

  const student = {
    ...foundStudent,
    schoolYear: grade(foundStudent.schoolYear),
    date_birth: date(foundStudent.date_birth).iso
  }

  return res.render("students/edit", { student }) 
}

exports.update = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundStudent = data.students.find(function(student, foundIndex) {
    if (id == student.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundStudent) {
    return res.send("Student Not Found!")
  }

  const student = {
    ...foundStudent,
    ...req.body,
    date_birth: Date.parse(req.body.date_birth),
    id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send("Write file error")

    return res.redirect(`/students/${id}`)
  })
}

exports.delete = function(req, res) {
  const { id } = req.body

  const filterStudents = data.students.filter(function(student) {
    return student.id != id
  })

  data.students = filterStudents
  
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send("Write error!")

    return res.redirect("/students")
  })
}