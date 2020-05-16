const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { age, date, graduation } = require ('../utils')

exports.index = function(req, res) {
  return res.render("teachers/index", { teachers: data.teachers })
}

exports.create = function(req, res) {
  return res.render("teachers/create")
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if(req.body[key] == ""){
      return res.send("Please, fill all the fields!")
    }
  }

  let {avatar, name, date_birth, school, type_class, occupation} = req.body

  date_birth = Date.parse(date_birth)
  const created = Date.now()
  const id = Number(data.teachers.length +1)

  data.teachers.push({
    id,
    avatar,
    name,
    date_birth,
    school,
    type_class,
    occupation,
    created
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send("Write file error")

    return res.redirect("/teachers")
  })

}

exports.show = function(req, res) {
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id
  })

  if(!foundTeacher) {
    return res.send("Teacher Not Found!")
  }

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.date_birth),
    school: graduation(foundTeacher.school),
    occupation: foundTeacher.occupation.split(","),
    created: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created)
  }

  return res.render("teachers/show", { teacher })
}

exports.edit = function(req, res) {
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id
  })

  if(!foundTeacher) {
    return res.send("Teacher Not Found!")
  }

  const teacher = {
    ...foundTeacher,
    school: graduation(foundTeacher.school),
    date_birth: date(foundTeacher.date_birth).iso
  }

  return res.render("teachers/edit", { teacher }) 
}

exports.update = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundTeacher) {
    return res.send("Teacher Not Found!")
  }

  const teacher = {
    ...foundTeacher,
    ...req.body,
    date_birth: Date.parse(req.body.date_birth),
    id: Number(req.body.id)
  }

  data.teachers[index] = teacher

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send("Write file error")

    return res.redirect(`/teachers/${id}`)
  })
}

exports.delete = function(req, res) {
  const { id } = req.body

  const filterTeachers = data.teachers.filter(function(teacher) {
    return teacher.id != id
  })

  data.teachers = filterTeachers
  
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send("Write error!")

    return res.redirect("/teachers")
  })
}