package com.afikur.infoimagepdbackend.controller;

import com.afikur.infoimagepdbackend.model.Member;
import com.afikur.infoimagepdbackend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeamController {
    private MemberRepository teamRepository;

    @Autowired
    public void setTeamRepository(MemberRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @GetMapping(value = {"/members"})
    public List<Member> getAllTeamMembers() {
        return teamRepository.findAll();
    }

    @PostMapping(value = {"/members"})
    public Member save(@RequestBody Member member) {
        return teamRepository.save(member);
    }
}
