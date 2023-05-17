const iteminfo = require('./itemModel');
const main = require('./mainModel');

module.exports = function (app) {
    app.post('/additem', async (req, res) => {
        try {
            var chk = 0
            const item = new iteminfo(req.body)
            const data = await main.find()
            console.log(item)
            console.log(data)
            item.item_id = data[0].lastid + 1
            await item.save()
            data[0].lastid = item.item_id
            console.log(1)
            await main.updateOne({ key: 'ritt' }, { $set: { lastid: item.item_id } })
            chk = 1
            res.send({ chk })
        } catch (err) {
            console.log(err.message)
            res.send(err)
        }
    })
    app.post('/finditem', async (req, res) => {
        try {
            const iditem = req.body
            if (iditem.iditem == '' || isNaN(parseInt(iditem.item_id))) {
                res.send({ item_id: 0 })
                return
            }
            const item = await iteminfo.find({ item_id: parseInt(iditem.item_id) })
            if (item == []) {
                res.send({ item_id: 0 })
                return
            }
            res.json(item)
        }
        catch (err) {
            console.log(err.message)
            res.send(err)
        }
    })

    app.post('/getitem', async (req, res) => {
        try {
            const pos = req.body
            const j = await iteminfo.find()
            var item = []
            if (pos.x.trim() == '') {
                for (var i = pos.start; i <= j.length; i++) {
                    if (item.length == pos.end + 1) { break }
                    if (j[i] == undefined) { break }
                    if ((pos.opt[0] == '-1') && (pos.opt[1] == '-1') && (pos.opt[2] == '-1') && (pos.opt[3] == '-1')) {
                        res.json([])
                        return
                    }
                    else {
                        var dumopt = []
                        for (let rin = 0; rin < pos.opt.length; rin++) {
                            if (pos.opt[rin] == '-1') { continue }
                            dumopt.push(pos.opt[rin])
                        }
                        for (var k = 0; k < dumopt.length; k++) {
                            if (dumopt[k] == j[i].tag.slice(-1)) {
                                item.push(j[i])
                                break
                            }
                        }
                    }

                }
                console.log(item)
                res.json(item)
                return
            }
            for (var i = pos.start; i < j.length; i++) {
                if (item.length == pos.end + 1) { break }
                if (j[i].item_id.toString().slice(0, pos.x.length) == pos.x) {
                    if ((pos.opt[0] == '-1') && (pos.opt[1] == '-1') && (pos.opt[2] == '-1') && (pos.opt[3] == '-1')) {
                        res.json([])
                        return
                    }
                    else {
                        var dumopt = []
                        for (let rin = 0; rin < pos.opt.length; rin++) {
                            if (pos.opt[rin] == '-1') { continue }
                            dumopt.push(pos.opt[rin])
                        }
                        for (var k = 0; k < dumopt.length; k++) {
                            if (dumopt[k] == j[i].tag.slice(-1)) {
                                item.push(j[i])
                                break
                            }
                        }
                    }
                }
            }
            console.log(item)
            res.json(item)
            // const item = await iteminfo.find({item_id:parseInt(iditem.item_id)})
        }
        catch (err) {
            res.send(err)
            console.log(err.message)
        }
    })
    app.post('/findedititem', async (req, res) => {
        try {
            const iditem = req.body
            const item = await iteminfo.find({ item_id: iditem.item_id })
            res.send(item[0])
        }
        catch (err) {
            console.log(err.message)
            res.send(err)
        }
    })
}