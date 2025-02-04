package com.julioneves.apiweb.controller;

import com.julioneves.apiweb.entity.Pessoas;
import com.julioneves.apiweb.service.PessoasService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/pessoas")
@CrossOrigin("*")
@RequiredArgsConstructor
public class PessoasController {

    @Autowired
    private PessoasService pessoasService;

    @PostMapping()
    public Pessoas savePessoa(@RequestBody Pessoas pessoa){
        return pessoasService.savePessoas(pessoa);
    }

    @GetMapping()
    public List<Pessoas> getPessoas() {
        return pessoasService.getPessoas();
    }

    @GetMapping("/{id}")
    public Pessoas getPessoa(@PathVariable Integer id) {
        return pessoasService.getPessoa(id);
    }

    @DeleteMapping("/{id}")
    public void deletePessoa(@PathVariable Integer id) {
        pessoasService.deletePessoa(id);
    }

    @PutMapping("/{id}")
    public Pessoas updatePessoa(@PathVariable Integer id, @RequestBody Pessoas pessoa) {
        return pessoasService.updatePessoa(pessoa, id);
    }
}
