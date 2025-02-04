package com.julioneves.apiweb.dao;

import com.julioneves.apiweb.entity.Pessoas;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoasDao extends CrudRepository<Pessoas, Integer> {
}
