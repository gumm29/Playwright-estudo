// @ts-check
const { expect } = require('@playwright/test')

const pessoa = require('../data/pessoa.json')
const home_mappings = require('./mappings/home.json')

exports.Home = class Home{

    constructor(page) {
        this.page = page
        this.campoInput = this.page.locator(home_mappings.input)
        this.campoEmail = this.page.locator(home_mappings.email_map)
    }

    async validacao(){
        await this.campoInput.fill(pessoa.nome)
        await expect(this.campoEmail).toEqual(pessoa.email)
    }
}