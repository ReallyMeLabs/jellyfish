(function() {var implementors = {
"jf_plonk":[["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.ProofEvaluations.html\" title=\"struct jf_plonk::proof_system::structs::ProofEvaluations\">ProofEvaluations</a>&lt;F&gt;<div class=\"where\">where\n    F: Field,</div>"]],
"jf_primitives":[["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"jf_primitives/rescue/trait.RescueParameter.html\" title=\"trait jf_primitives::rescue::RescueParameter\">RescueParameter</a>, const INPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>, const INPUT_LEN_PLUS_ONE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/commitment/struct.FixedLengthRescueCommitment.html\" title=\"struct jf_primitives::commitment::FixedLengthRescueCommitment\">FixedLengthRescueCommitment</a>&lt;F, INPUT_LEN, INPUT_LEN_PLUS_ONE&gt;"],["impl&lt;F: <a class=\"trait\" href=\"jf_primitives/rescue/trait.RescueParameter.html\" title=\"trait jf_primitives::rescue::RescueParameter\">RescueParameter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/rescue/struct.Permutation.html\" title=\"struct jf_primitives::rescue::Permutation\">Permutation</a>&lt;F&gt;"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/pcs/prelude/struct.UnivariateProverParam.html\" title=\"struct jf_primitives::pcs::prelude::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/pcs/prelude/struct.Commitment.html\" title=\"struct jf_primitives::pcs::prelude::Commitment\">Commitment</a>&lt;E&gt;"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSVerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSVerKey\">BLSVerKey</a>"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/pcs/prelude/struct.UnivariateVerifierParam.html\" title=\"struct jf_primitives::pcs::prelude::UnivariateVerifierParam\">UnivariateVerifierParam</a>&lt;E&gt;"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/pcs/prelude/struct.UnivariateUniversalParams.html\" title=\"struct jf_primitives::pcs::prelude::UnivariateUniversalParams\">UnivariateUniversalParams</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    E::G2Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;F: <a class=\"trait\" href=\"jf_primitives/rescue/trait.RescueParameter.html\" title=\"trait jf_primitives::rescue::RescueParameter\">RescueParameter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/rescue/struct.PRP.html\" title=\"struct jf_primitives::rescue::PRP\">PRP</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"jf_primitives/vdf/minroot/trait.MinRootField.html\" title=\"trait jf_primitives::vdf::minroot::MinRootField\">MinRootField</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/vdf/minroot/struct.MinRootElement.html\" title=\"struct jf_primitives::vdf::minroot::MinRootElement\">MinRootElement</a>&lt;F&gt;"],["impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/hasher/struct.HasherNode.html\" title=\"struct jf_primitives::merkle_tree::hasher::HasherNode\">HasherNode</a>&lt;H&gt;<div class=\"where\">where\n    H: Digest,</div>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/rescue/struct.RescueVector.html\" title=\"struct jf_primitives::rescue::RescueVector\">RescueVector</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/prelude/struct.Sha3Node.html\" title=\"struct jf_primitives::merkle_tree::prelude::Sha3Node\">Sha3Node</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.SignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::SignKey\">SignKey</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.KeyPair.html\" title=\"struct jf_primitives::aead::KeyPair\">KeyPair</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.EncKey.html\" title=\"struct jf_primitives::aead::EncKey\">EncKey</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/elgamal/struct.EncKey.html\" title=\"struct jf_primitives::elgamal::EncKey\">EncKey</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_primitives/vdf/minroot/struct.MinRootPP.html\" title=\"struct jf_primitives::vdf::minroot::MinRootPP\">MinRootPP</a>"]],
"jf_relation":[["impl&lt;F: FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_relation/constraint_system/struct.PlonkCircuit.html\" title=\"struct jf_relation::constraint_system::PlonkCircuit\">PlonkCircuit</a>&lt;F&gt;"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/emulated/struct.SWPoint.html\" title=\"struct jf_relation::gadgets::ecc::emulated::SWPoint\">SWPoint</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ultraplonk/mod_arith/struct.FpElem.html\" title=\"struct jf_relation::gadgets::ultraplonk::mod_arith::FpElem\">FpElem</a>&lt;F&gt;"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.TEPoint.html\" title=\"struct jf_relation::gadgets::ecc::TEPoint\">TEPoint</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ultraplonk/mod_arith/struct.FpElemVar.html\" title=\"struct jf_relation::gadgets::ultraplonk::mod_arith::FpElemVar\">FpElemVar</a>&lt;F&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()