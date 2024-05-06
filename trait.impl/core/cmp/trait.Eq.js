(function() {var implementors = {
"jf_aead":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_aead/struct.AEADError.html\" title=\"struct jf_aead::AEADError\">AEADError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_aead/struct.Ciphertext.html\" title=\"struct jf_aead::Ciphertext\">Ciphertext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_aead/struct.EncKey.html\" title=\"struct jf_aead::EncKey\">EncKey</a>"]],
"jf_elgamal":[["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_elgamal/struct.Ciphertext.html\" title=\"struct jf_elgamal::Ciphertext\">Ciphertext</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_elgamal/struct.EncKey.html\" title=\"struct jf_elgamal::EncKey\">EncKey</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"]],
"jf_merkle_tree":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"jf_merkle_tree/errors/enum.MerkleTreeError.html\" title=\"enum jf_merkle_tree::errors::MerkleTreeError\">MerkleTreeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/prelude/struct.Sha3Digest.html\" title=\"struct jf_merkle_tree::prelude::Sha3Digest\">Sha3Digest</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/prelude/struct.Sha3Node.html\" title=\"struct jf_merkle_tree::prelude::Sha3Node\">Sha3Node</a>"],["impl&lt;E, H, I, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/append_only/struct.MerkleTree.html\" title=\"struct jf_merkle_tree::append_only::MerkleTree\">MerkleTree</a>&lt;E, H, I, ARITY, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E, H, I, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/light_weight/struct.LightWeightMerkleTree.html\" title=\"struct jf_merkle_tree::light_weight::LightWeightMerkleTree\">LightWeightMerkleTree</a>&lt;E, H, I, ARITY, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E, H, I, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/universal_merkle_tree/struct.UniversalMerkleTree.html\" title=\"struct jf_merkle_tree::universal_merkle_tree::UniversalMerkleTree\">UniversalMerkleTree</a>&lt;E, H, I, ARITY, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E, H, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>, N, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/namespaced_merkle_tree/struct.NMT.html\" title=\"struct jf_merkle_tree::namespaced_merkle_tree::NMT\">NMT</a>&lt;E, H, ARITY, N, T&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"jf_merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>, T&gt; + <a class=\"trait\" href=\"jf_merkle_tree/namespaced_merkle_tree/trait.BindNamespace.html\" title=\"trait jf_merkle_tree::namespaced_merkle_tree::BindNamespace\">BindNamespace</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>, T, N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"jf_merkle_tree/namespaced_merkle_tree/trait.Namespaced.html\" title=\"trait jf_merkle_tree::namespaced_merkle_tree::Namespaced\">Namespaced</a>&lt;Namespace = N&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    N: <a class=\"trait\" href=\"jf_merkle_tree/namespaced_merkle_tree/trait.Namespace.html\" title=\"trait jf_merkle_tree::namespaced_merkle_tree::Namespace\">Namespace</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E, I, T, const ARITY: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/prelude/struct.MerkleProof.html\" title=\"struct jf_merkle_tree::prelude::MerkleProof\">MerkleProof</a>&lt;E, I, T, ARITY&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    I: <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    T: <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"jf_merkle_tree/trait.Element.html\" title=\"trait jf_merkle_tree::Element\">Element</a>, I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"jf_merkle_tree/trait.Index.html\" title=\"trait jf_merkle_tree::Index\">Index</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"jf_merkle_tree/trait.NodeValue.html\" title=\"trait jf_merkle_tree::NodeValue\">NodeValue</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"jf_merkle_tree/prelude/enum.MerkleNode.html\" title=\"enum jf_merkle_tree::prelude::MerkleNode\">MerkleNode</a>&lt;E, I, T&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"jf_rescue/trait.RescueParameter.html\" title=\"trait jf_rescue::RescueParameter\">RescueParameter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/prelude/struct.RescueHash.html\" title=\"struct jf_merkle_tree::prelude::RescueHash\">RescueHash</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/examples/struct.Interval.html\" title=\"struct jf_merkle_tree::examples::Interval\">Interval</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"jf_merkle_tree/enum.LookupResult.html\" title=\"enum jf_merkle_tree::LookupResult\">LookupResult</a>&lt;F, P, N&gt;"],["impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_merkle_tree/hasher/struct.HasherNode.html\" title=\"struct jf_merkle_tree::hasher::HasherNode\">HasherNode</a>&lt;H&gt;<div class=\"where\">where\n    H: Digest,</div>"]],
"jf_pcs":[["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/multilinear_kzg/struct.MultilinearKzgBatchProof.html\" title=\"struct jf_pcs::multilinear_kzg::MultilinearKzgBatchProof\">MultilinearKzgBatchProof</a>&lt;E&gt;"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/multilinear_kzg/struct.MultilinearKzgProof.html\" title=\"struct jf_pcs::multilinear_kzg::MultilinearKzgProof\">MultilinearKzgProof</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/prelude/struct.Commitment.html\" title=\"struct jf_pcs::prelude::Commitment\">Commitment</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/prelude/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::prelude::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/prelude/struct.UnivariateUniversalParams.html\" title=\"struct jf_pcs::prelude::UnivariateUniversalParams\">UnivariateUniversalParams</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    E::G2Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/prelude/struct.UnivariateVerifierParam.html\" title=\"struct jf_pcs::prelude::UnivariateVerifierParam\">UnivariateVerifierParam</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    E::G2Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/struct.UnivariateKzgProof.html\" title=\"struct jf_pcs::univariate_kzg::UnivariateKzgProof\">UnivariateKzgProof</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"]],
"jf_plonk":[["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/circuit/plonk_verifier/struct.VerifyingKeyVar.html\" title=\"struct jf_plonk::circuit::plonk_verifier::VerifyingKeyVar\">VerifyingKeyVar</a>&lt;E&gt;<div class=\"where\">where\n    E::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;<div class=\"where\">where\n    E::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.PlookupProof.html\" title=\"struct jf_plonk::proof_system::structs::PlookupProof\">PlookupProof</a>&lt;E&gt;<div class=\"where\">where\n    E::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.PlookupProvingKey.html\" title=\"struct jf_plonk::proof_system::structs::PlookupProvingKey\">PlookupProvingKey</a>&lt;E&gt;<div class=\"where\">where\n    E::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.PlookupVerifyingKey.html\" title=\"struct jf_plonk::proof_system::structs::PlookupVerifyingKey\">PlookupVerifyingKey</a>&lt;E&gt;"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;<div class=\"where\">where\n    E::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.ProvingKey.html\" title=\"struct jf_plonk::proof_system::structs::ProvingKey\">ProvingKey</a>&lt;E&gt;<div class=\"where\">where\n    E::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.VerifyingKey.html\" title=\"struct jf_plonk::proof_system::structs::VerifyingKey\">VerifyingKey</a>&lt;E&gt;<div class=\"where\">where\n    E::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.PlookupEvaluations.html\" title=\"struct jf_plonk::proof_system::structs::PlookupEvaluations\">PlookupEvaluations</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.ProofEvaluations.html\" title=\"struct jf_plonk::proof_system::structs::ProofEvaluations\">ProofEvaluations</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_plonk/circuit/plonk_verifier/struct.BatchProofVar.html\" title=\"struct jf_plonk::circuit::plonk_verifier::BatchProofVar\">BatchProofVar</a>&lt;F&gt;"]],
"jf_relation":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"jf_relation/constraint_system/enum.MergeableCircuitType.html\" title=\"enum jf_relation::constraint_system::MergeableCircuitType\">MergeableCircuitType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"jf_relation/constraint_system/enum.PlonkType.html\" title=\"enum jf_relation::constraint_system::PlonkType\">PlonkType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.PointVariable.html\" title=\"struct jf_relation::gadgets::ecc::PointVariable\">PointVariable</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/emulated/struct.SWPoint.html\" title=\"struct jf_relation::gadgets::ecc::emulated::SWPoint\">SWPoint</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.TEPoint.html\" title=\"struct jf_relation::gadgets::ecc::TEPoint\">TEPoint</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ultraplonk/mod_arith/struct.FpElem.html\" title=\"struct jf_relation::gadgets::ultraplonk::mod_arith::FpElem\">FpElem</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_relation/gadgets/ultraplonk/mod_arith/struct.FpElemVar.html\" title=\"struct jf_relation::gadgets::ultraplonk::mod_arith::FpElemVar\">FpElemVar</a>&lt;F&gt;"]],
"jf_rescue":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"jf_rescue/enum.RescueError.html\" title=\"enum jf_rescue::RescueError\">RescueError</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"jf_rescue/trait.RescueParameter.html\" title=\"trait jf_rescue::RescueParameter\">RescueParameter</a>, const INPUT_LEN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>, const INPUT_LEN_PLUS_ONE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_rescue/commitment/struct.FixedLengthRescueCommitment.html\" title=\"struct jf_rescue::commitment::FixedLengthRescueCommitment\">FixedLengthRescueCommitment</a>&lt;F, INPUT_LEN, INPUT_LEN_PLUS_ONE&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_rescue/struct.RescueVector.html\" title=\"struct jf_rescue::RescueVector\">RescueVector</a>&lt;F&gt;"]],
"jf_signature":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"jf_signature/enum.SignatureError.html\" title=\"enum jf_signature::SignatureError\">SignatureError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_signature/bls_over_bls12381/struct.BLSSignKey.html\" title=\"struct jf_signature::bls_over_bls12381::BLSSignKey\">BLSSignKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_signature/bls_over_bls12381/struct.BLSSignature.html\" title=\"struct jf_signature::bls_over_bls12381::BLSSignature\">BLSSignature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_signature/bls_over_bls12381/struct.BLSVerKey.html\" title=\"struct jf_signature::bls_over_bls12381::BLSVerKey\">BLSVerKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_signature/bls_over_bn254/struct.SignKey.html\" title=\"struct jf_signature::bls_over_bn254::SignKey\">SignKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_signature/bls_over_bn254/struct.Signature.html\" title=\"struct jf_signature::bls_over_bn254::Signature\">Signature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_signature/bls_over_bn254/struct.VerKey.html\" title=\"struct jf_signature::bls_over_bn254::VerKey\">VerKey</a>"]],
"jf_vdf":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vdf/minroot/struct.MinRootPP.html\" title=\"struct jf_vdf::minroot::MinRootPP\">MinRootPP</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vdf/struct.VDFError.html\" title=\"struct jf_vdf::VDFError\">VDFError</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"jf_vdf/minroot/trait.MinRootField.html\" title=\"trait jf_vdf::minroot::MinRootField\">MinRootField</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vdf/minroot/struct.MinRootElement.html\" title=\"struct jf_vdf::minroot::MinRootElement\">MinRootElement</a>&lt;F&gt;"]],
"jf_vid":[["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/advz/precomputable/struct.PrecomputeData.html\" title=\"struct jf_vid::advz::precomputable::PrecomputeData\">PrecomputeData</a>&lt;E&gt;<div class=\"where\">where\n    E: Pairing + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;E, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.Common.html\" title=\"struct jf_vid::advz::Common\">Common</a>&lt;E, H&gt;<div class=\"where\">where\n    E: Pairing,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/hasher/trait.HasherDigest.html\" title=\"trait jf_merkle_tree::hasher::HasherDigest\">HasherDigest</a>,</div>"],["impl&lt;E, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.Share.html\" title=\"struct jf_vid::advz::Share\">Share</a>&lt;E, H&gt;<div class=\"where\">where\n    E: Pairing,\n    H: <a class=\"trait\" href=\"jf_merkle_tree/hasher/trait.HasherDigest.html\" title=\"trait jf_merkle_tree::hasher::HasherDigest\">HasherDigest</a>,</div>"],["impl&lt;E, H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.LargeRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::LargeRangeProof\">LargeRangeProof</a>&lt;F&gt;"],["impl&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.SmallRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::SmallRangeProof\">SmallRangeProof</a>&lt;P&gt;"],["impl&lt;V: <a class=\"trait\" href=\"jf_vid/trait.VidScheme.html\" title=\"trait jf_vid::VidScheme\">VidScheme</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/struct.VidDisperse.html\" title=\"struct jf_vid::VidDisperse\">VidDisperse</a>&lt;V&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()