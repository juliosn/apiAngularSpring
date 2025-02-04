package com.julioneves.apiweb.service;

import com.julioneves.apiweb.dao.PessoasDao;
import com.julioneves.apiweb.entity.Pessoas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PessoasService {

    @Autowired
    PessoasDao pessoasDao;

    public Pessoas savePessoas(Pessoas pessoa){
        return pessoasDao.save(pessoa);
    }

    public List<Pessoas> getPessoas() {
        List<Pessoas> pessoas = new ArrayList<>();
        pessoasDao.findAll().forEach(pessoas::add);
        return pessoas;
    }

    public Pessoas getPessoa(Integer id) {
        return pessoasDao.findById(id).orElseThrow();
    }

    public void deletePessoa(Integer id) {
        pessoasDao.deleteById(id);
    }

    public Pessoas updatePessoa(Pessoas pessoa, Integer id) {
        Pessoas pessoaExistente = pessoasDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Pessoa não encontrada com ID: " + id));

        pessoa.setId(pessoaExistente.getId());

        return pessoasDao.save(pessoa);
    }

}
