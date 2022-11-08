package com.example.backend.dao;

import com.example.backend.models.Branch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class BranchDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Branch> getBranch(){
        String query="select * from branch";
        List<Branch> branches=jdbcTemplate.query(query, new ResultSetExtractor<List<Branch>>() {
            @Override
            public List<Branch> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<Branch> branchList=new ArrayList<>();
                while(rs.next()){
                    Branch branch=new Branch();
                    branch.setName(rs.getString("branch_name"));
                    branch.setCity(rs.getString("city"));
                    branch.setHouse(rs.getString("house_no"));
                    branch.setState(rs.getString("state"));
                    branch.setId(rs.getInt("branch_id"));
                    branch.setStreet(rs.getString("street_name"));
                    branch.setZipcode(rs.getString("zipcode"));
                    branch.setSince(rs.getString("since"));
                    branchList.add(branch);
                }

                return branchList;
            }
        });
        return branches;
    }
}
