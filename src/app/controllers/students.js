const { date, grade } = require ('../../lib/utils')
const Student = require('../models/Student')

module.exports = {
  index(req, res){

    Student.all(function(students) {
      return res.render("students/index", { students })
    })

  },
  create(req, res){
    return res.render("students/create")
  },
  post(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
      if(req.body[key] == ""){
        return res.send("Please, fill all the fields!")
      }
    }

    Student.create(req.body, function(student) {
      return res.redirect(`/students/${student.id}`)
    })
  },
  show(req, res){
    Student.find(req.params.id, function(student) {
      if(!student) return res.send("Student Not Found!")

      student.birth_date = date(student.birth_date).birthDate
      student.school_year = grade(student.school_year)

      return res.render("students/show", { student })
    })
  },
  edit(req, res){
    Student.find(req.params.id, function(student) {
      if(!student) return res.send("Student Not Found!")
      
      student.birth_date = date(student.birth_date).iso
      student.school_year = grade(student.school_year)

      return res.render("students/edit", { student })
    })
  },
  put(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
      if(req.body[key] == ""){
        return res.send("Please, fill all the fields!")
      }
    }

    Student.update(req.body, function() {
      return res.redirect(`students/${req.body.id}`)
    })
  },
  delete(req, res){
    Student.delete(req.body.id, function() {
      return res.redirect("students")
    })
  }
}